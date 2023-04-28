import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
// import FetchStock from "../Components/FetchStock";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StockDetail from "../Components/StockDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth } from "firebase/auth";

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: "#f7e5df",
    borderRadius: 10,
  },
  font1: {
    fontSize: 18,
    fontWeight: "500",
  },
});

function Trade({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUserData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  // const [data, setData] = React.useState([
  //   { symbol: "", amount: 0, price: 0, balance: 0, time: 0 },
  // ]);
  const [data, setData] = React.useState({
    1681957133011: {
      symbol: "",
      amount: 0,
      price: 0,
      balance: 0,
      isOpen: true,
      firstPurchase: 1681957133011,
      lastUpdated: 1681957133011,
    },
  });
  const [reload, setReload] = React.useState(false);
  let uniqueId;

  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
    console.log("Unique ID:", uniqueId);
  };

  const getUserData = async () => {
    const docRef = doc(db, "purchaseHistory", uniqueId);
    // const docRef = doc(db, "holdingStack", uniqueId);
    const docSnap = await getDoc(docRef);
    // docData = docSnap.data().history;
    // console.log("History: ", docData);
    docData = docSnap.data();
    console.log("Data: ", docData);
    if (docSnap.exists()) {
      setData({});
      setData({ ...docData });
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const init = async () => {
      await getId();
      await getUserData();
    };
    init();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 21,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Purchased Stocks
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#808080", flex: 0.3 }}>Asset</Text>
          <Text style={{ color: "#808080", flex: 0.3 }}>Price</Text>
          <Text style={{ color: "#808080", flex: 0.3 }}>Amount</Text>
          <Text style={{ color: "#808080" }}>Date</Text>
        </View>

        <View
          style={{
            height: "0.1%",
            backgroundColor: "#808080",
            marginTop: 5,
            marginBottom: 15,
          }}
        ></View>
        <View>
          {Object.keys(data).map(
            (el, index) =>
              index < 100 &&
              data[el].amount > 0 && (
                <View key={new Date().getTime().toString()}>
                  <Pressable
                    onPress={() =>
                      navigation.navigate("StockDetail", {
                        symbol: data[el].symbol,
                        price: data[el].price,
                        firstPurchase: data[el].firstPurchase,
                        amount: data[el].amount,
                      })
                    }
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Text
                      style={{ flex: 0.3, fontWeight: "bold", fontSize: 18 }}
                    >
                      {data[el].symbol}
                    </Text>
                    <Text
                      style={{ flex: 0.3, fontWeight: "bold", fontSize: 16 }}
                    >
                      {" "}
                      $ {data[el].price}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flex: 0.3,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 16 }}>
                        {" "}
                        {" " + data[el].amount}
                      </Text>
                      <Text style={{ color: "#808080", fontSize: 14 }}>
                        {"  "}
                        shares
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        // flex: 0.3,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>
                        {Date(el).toLocaleString("en-US").slice(4, 10)}
                      </Text>
                      {/* <Text style={{ color: "#808080", fontSize: 12 }}></Text> */}
                    </View>
                  </Pressable>

                  <View
                    style={{
                      height: 0.4,
                      backgroundColor: "#808080",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  ></View>
                </View>
              )
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();
export default function TradeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trade"
        component={Trade}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="StockDetail"
        component={StockDetail}
        options={{ title: "Stock Detail" }}
      />
    </Stack.Navigator>
  );
}
