import {
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Application from "expo-application";
import StockChart from "./StockChart";
import fetchStockInfo from "./fetchStockInfo";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
  deleteField,
  RefreshControl,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StockDetail({ route, navigation }) {
  const [id, setId] = React.useState();
  const [range, setRange] = React.useState("5d");
  const [int, setInt] = React.useState("15min");
  const [total, setTotal] = React.useState(0);
  const [amount, onChangeAmount] = React.useState();
  const userData = [0, 0]; // balance, purchasedAmount
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
  };

  const getUserData = async () => {
    const docRef = doc(db, "users", uniqueId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userData[0] = docSnap.data().balance;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    const stackData = await getDoc(doc(db, "holdingStack", uniqueId));
    if (stackData.exists()) {
      console.log("StockData: ", stackData.data());
      let data = stackData.data()[company];
      console.log("Amount: ", data);
      if (data !== undefined) {
        // first purchase
        userData[1] = data;
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getId();
  }, []);

  //mock data
  company = route.params.symbol;
  purchasedPrice = route.params.price;
  price = 500;
  prevClose = 123;
  percent = 2.21;
  shortName = route.params.symbol;
  dayLow = 444;
  dayHigh = 555;
  openPrice = 777;
  fiftyTwoWeekHigh = 888;
  fiftyTwoWeekLow = 999;
  volume = 10;
  mktCap = 11;

  // DO NOT ERASE!!!
  // comment when testing
  let stock = fetchStockInfo(route.params.symbol);
  let company = route.params.symbol;
  let price = stock[1];
  let prevClose = stock[2];
  let percent = stock[3];
  let shortName = stock[4];
  let dayLow = stock[6];
  let dayHigh = stock[7];
  let openPrice = stock[8];
  let fiftyTwoWeekLow = stock[9];
  let fiftyTwoWeekHigh = stock[10];
  let volume = stock[11];
  let mktCap = stock[12];

  const overview = [
    ["Previous Close", prevClose],
    ["Open", openPrice],
    ["Day High", dayHigh],
    ["Day Low", dayLow],
    ["Volume", volume],
    ["Market Cap", mktCap],
  ];

  function handleChartChange(type) {
    if (type === "1d") {
      setRange("1d");
      setInt("5m");
    } else if (type === "1wk") {
      setRange("5d");
      setInt("15m");
    } else if (type === "1mo") {
      setRange("1mo");
      setInt("60m");
    } else if (type === "6mo") {
      setRange("6mo");
      setInt("1d");
    } else if (type === "1y") {
      setRange("1y");
      setInt("1d");
    }
  }
  const updateBalance = async (type) => {
    type = type === "Buy" ? -1 : 1;
    try {
      const res = await updateDoc(doc(db, "users", uniqueId), {
        // "holdingStack."+compnay : increment(amount)
        balance: increment(amount * price * type),
        firstTrade: true,
      });
      userData[0] = amount * price * type;
      console.log("Balance Updated!", res);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const updateTransaction = async (type) => {
    let typeFlag = type === "Buy" ? 1 : -1;
    const ref = doc(db, "transaction", uniqueId);
    try {
      const response = await updateDoc(ref, {
        history: arrayUnion({
          symbol: company,
          name: shortName,
          amount: price * amount * typeFlag,
          time: new Date().getTime(),
        }),
      });
      console.log("Transaction updated!", response);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const updateHistory = async (type) => {
    let typeFlag = type === "Buy" ? -1 : 1;
    let tempBalance = userData[0] + amount * price * typeFlag;
    const DocRef = doc(db, "purchaseHistory", uniqueId);

    try {
      let currTime = new Date().getTime();
      let time = type === "Buy" ? currTime : route.params.firstPurchase;
      const res = await updateDoc(
        DocRef,
        type === "Buy"
          ? {
              [time]: {
                symbol: company,
                price: price,
                firstPurchase:
                  type === "Buy" ? currTime : route.params.firstPurchase,
                lastUpdated: currTime,
                amount: Number(amount),
                balance: tempBalance,
                isOpen: type === "Buy" ? true : false,
              },
            }
          : {
              [time]: {
                symbol: company,
                price: price,
                firstPurchase:
                  type === "Buy" ? currTime : route.params.firstPurchase,
                lastUpdated: currTime,
                amount: route.params.amount - amount,
                balance: tempBalance,
                isOpen: type === "Buy" ? true : false,
              },
            }
      );
      console.log("Purchase History updated!", res);
    } catch (e) {
      console.log("Error: ", e);
    }
    // CRUD
    // create
    // read
    // update
    // delete
    await updateDoc(
      doc(db, "users", uniqueId),
      type === "Buy"
        ? {
            balanceHistory: arrayUnion(tempBalance),
          }
        : {
            balanceHistory: arrayUnion(tempBalance),
            weeklyProfit: increment(price - purchasedPrice),
          }
    );
  };
  const updateStock = async (type, purchased) => {
    const DocRef = doc(db, "holdingStack", uniqueId);
    type = type === "Buy" ? 1 : -1;
    console.log("initial: ", userData[1]);
    try {
      userData[1] = Number(amount) * type + userData[1];
      // delete from the holdingStack
      if (userData[1] === 0) {
        await updateDoc(DocRef, {
          [`${company}`]: deleteField(),
        });
      } else {
        const res = await updateDoc(DocRef, {
          [`${company}`]: userData[1],
        });
        console.log("Holding Stacks updated!", res);
      }

      // userData[1] = Number(amount) * type + userData[1];
    } catch (e) {
      console.log("Error: ", e);
    }
    // try {
    //   // const DocRef = doc(db, "users", uniqueId);
    //   // const res = await updateDoc(DocRef, {
    //   //   // "holdingStack.AAPL": amount,
    //   //   [`holdingStack.${company}`]: amount,
    //   // });

    //   // const res = db.collection("users").doc(uniqueId).update({
    //   //   // [`holdingStack.${company}`]: 10,
    //   //   "holdingStack.AAPL": 5,
    //   // });
    //   // .update({
    //   //   "holdingStack.AAPL": amount,
    //   // });

    //   console.log(res);
    // } catch (e) {
    //   console.log("Error: ", e);
    // }
  };

  async function handleBuy() {
    let balance;
    let profit;
    let purchased;
    await getUserData(); // takes 2 seconds
    // code that uses result from getUserData()
    let total = amount * price;
    console.log("total: ", total);
    console.log(userData[0]);
    if (amount <= 0 || amount == null) {
      alert("Please eneter amount of shares to buy.");
    } else if (userData[0] < total) {
      alert("Not enough balance!");
    } else {
      updateBalance("Buy");
      updateStock("Buy", purchased);
      updateHistory("Buy");
      updateTransaction("Buy");
      alert(`Bought ${amount} shares of ${company}!`);
    }
  }

  async function handleSell() {
    let balance;
    let profit;
    let purchased;
    await getUserData();
    let total = amount * price;
    console.log("total: ", total);
    console.log(userData[0]);
    if (amount <= 0 || amount == null) {
      alert("Please eneter amount of shares to sell.");
    } else if (route.params.amount < amount) {
      alert("Not enough purchased stocks!");
    } else {
      await updateHistory("Sell");
      await updateStock("Sell", purchased);
      await updateBalance("Sell");
      await updateTransaction("Sell");
      // change to Toast
      alert(`Sold ${amount} shares of ${company}!`);
    }
    navigation.navigate("Trade", {
      reload: true,
    });
  }

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 10, marginTop: 20 }}>
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: 700 }}>{company}</Text>
          <Text style={{ fontSize: 12, color: "#808080" }}>{shortName}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: 5,
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: 700 }}>${price}</Text>
          <Text
            style={[
              { marginLeft: 10 },
              percent > 0 ? { color: "green" } : { color: "red" },
            ]}
          >
            {percent}%
          </Text>
        </View>
        {/* comment when testing */}
        <StockChart Symbol={company} Range={range} Interval={int}></StockChart>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => handleChartChange("1d")}
            style={range === "1d" && styles.selected}
          >
            <Text
              style={range === "1d" ? styles.textselected : styles.unselected}
            >
              1D
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1wk")}
            style={range === "5d" && styles.selected}
          >
            <Text
              style={range === "5d" ? styles.textselected : styles.unselected}
            >
              1W
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1mo")}
            style={range === "1mo" && styles.selected}
          >
            <Text
              style={range === "1mo" ? styles.textselected : styles.unselected}
            >
              1M
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("6mo")}
            style={range === "6mo" && styles.selected}
          >
            <Text
              style={range === "6mo" ? styles.textselected : styles.unselected}
            >
              6M
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleChartChange("1y")}
            style={range === "1y" && styles.selected}
          >
            <Text
              style={range === "1y" ? styles.textselected : styles.unselected}
            >
              1Y
            </Text>
          </Pressable>
        </View>

        <Text
          style={{
            fontWeight: 500,
            fontSize: 18,
            marginTop: 30,
            marginBottom: 10,
            marginLeft: 10,
          }}
        >
          Overview
        </Text>

        {overview.map((element, index) => (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#808080",
                flexGrow: 1,
                fontWeight: 600,
                marginLeft: 10,
              }}
            >
              {element[0]}
            </Text>
            <Text
              style={{
                color: "#808080",
                fontWeight: 600,
                marginRight: 10,
                justifyContent: "flex-end",
              }}
            >
              {element[1]}
            </Text>
          </View>
        ))}
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Text
            style={{
              flexGrow: 1,
              fontSize: 16,
              marginBottom: 10,
              fontWeight: "500",
              marginLeft: 10,
            }}
          >
            Shares
          </Text>
          <TextInput
            textAlign="right"
            style={{ marginRight: 10 }}
            value={amount}
            placeholder="Type the amount of shares"
            onChangeText={onChangeAmount}
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 10,
              flexGrow: 1,
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Total
          </Text>
          <Text style={{ marginRight: 10, justifyContent: "flex-end" }}>
            {amount > 0 && "$ " + amount * price}
          </Text>
          {/* <TextInput value={total}></TextInput> */}
        </View>

        {purchasedPrice === undefined ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <Pressable
              onPress={handleBuy}
              style={{
                flex: 0.5,
                backgroundColor: "#7BC17E",
                borderRadius: 10,
                marginRight: "2%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
                Buy
              </Text>
            </Pressable>
          </View>
        ) : (
          // <View
          //   style={{
          //     flexDirection: "row",
          //     justifyContent: "space-around",
          //     marginTop: 20,
          //   }}
          // >
          //   <Pressable
          //     onPress={handleBuy}
          //     style={{
          //       flex: 0.3,
          //       backgroundColor: "#7BC17E",
          //       borderRadius: 10,
          //     }}
          //   >
          //     <Text
          //       style={{
          //         color: "white",
          //         fontWeight: "600",
          //         textAlign: "center",
          //         padding: 5,
          //         paddingHorizontal: 10,
          //       }}
          //     >
          //       Buy
          //     </Text>
          //   </Pressable>
          //   <Pressable
          //     onPress={handleSell}
          //     style={{
          //       flex: 0.3,
          //       backgroundColor: "#be2e33",
          //       borderRadius: 10,
          //     }}
          //   >
          //     <Text
          //       style={{
          //         color: "white",
          //         fontWeight: "600",
          //         textAlign: "center",
          //         padding: 5,
          //         paddingHorizontal: 10,
          //       }}
          //     >
          //       Sell
          //     </Text>
          //   </Pressable>
          // </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <Pressable
              onPress={handleSell}
              style={{
                flex: 0.5,
                backgroundColor: "#be2e33",
                borderRadius: 10,
                marginRight: "2%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
                Sell
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#808080",
    paddingLeft: 5,
    paddingRight: 5,
  },
  unselected: {
    color: "#808080",
  },
  textselected: {
    color: "black",
  },
});
