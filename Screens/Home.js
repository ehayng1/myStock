import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  RefreshControl,
} from "react-native";
import PaintTransctions from "../Components/PaintTransactions";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { db } from "../firebaseConfig";
import {
  collection,
  onSnapShot,
  where,
  query,
  doc,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width * 0.95;
const color = "E64A19";

export default function Home({ route, navigation }) {
  const [userData, setUserData] = React.useState({
    balance: 0,
    balanceHistory: [0, 0, 0],
    profit: 0,
    firstTrade: false,
    weeklyProfit: 0,
  });
  const [historyData, setHistoryData] = React.useState([]);
  let uniqueId;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getUserData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const getUserData = async () => {
    const docRef = doc(db, "transaction", uniqueId);
    const docSnap = await getDoc(docRef);
    docData = docSnap.data().history.reverse();
    if (docSnap.exists()) {
      setHistoryData(docData);
    } else {
      console.log("No such document!");
    }
    const userRef = doc(db, "users", uniqueId);
    const userSnap = await getDoc(userRef);
    console.log("Data: ", userSnap.data());
    if (userSnap.exists()) {
      setUserData({ ...userSnap.data() });
    } else {
      console.log("No such document!");
    }
  };
  const getId = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      uniqueId = user.uid;
    }
    console.log("Unique ID:", uniqueId);
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

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`, // color of label
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,

    fillShadowGradientFrom: "#1d8038", // green
    // fillShadowGradientFrom: "#d93025", // red
    fillShadowGradientTo: "#FFFFFF",
  };
  // data for charts
  const data = {
    // labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: userData.balanceHistory,

        color: (opacity = 0) => `rgba(29,128,56, ${opacity})`, // green
        strokeWidth: 2, // optional
      },
    ],
  };

  let index = [];

  for (let i = 0; i < userData.balanceHistory.length; i++) {
    index.push(i);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ marginLeft: 20 }}></View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 10,
            fontWeight: "600",
            marginBottom: 15,
            marginLeft: 0,
            color: "#D84315",
          }}
        >
          Hello, {userData.name}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#808080", fontSize: 14 }}>
            Current Balance
          </Text>
          <Text
            style={{
              fontSize: 24,
              marginTop: 10,
              fontWeight: "600",
              marginBottom: 20,
              marginLeft: 5,
              color: "#D84315",
            }}
          >
            $ {userData.balance.toFixed(2)}
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "#808080" }}>
            Overall Performance
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 10,
              marginTop: 10,
              color: userData.weeklyProfit > 0 ? "#006100" : "#9A0000",
            }}
          >
            {userData.weeklyProfit >= 0 ? "+" : "-"} ${" "}
            {userData.weeklyProfit.toFixed(2)}
          </Text>

          {userData.firstTrade === true ? (
            <View style={{ marginHorizontal: 0 }}>
              <LineChart
                style={{
                  padding: 0,
                  marginLeft: "5%",
                }}
                data={data}
                width={screenWidth}
                height={256}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                hidePointsAtIndex={index}
                withInnerLines={false}
                withOuterLines={false}
                yAxisLabel="$"
                yLabelsOffset={0}
                bezier
              />
            </View>
          ) : (
            <Text
              style={{
                fontSize: 26,
                fontWeight: 500,
                marginTop: 30,
                // marginBottom: 0,
              }}
            >
              Start your first Trade!
            </Text>
          )}
        </View>
        {userData.firstTrade && (
          <View style={{ marginBottom: 15, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Recent Transactions
            </Text>
          </View>
        )}
        {console.log("HIS: ", historyData)}
        {/* {console.log("Reverse: ", historyData.reverse())} */}
        {userData.firstTrade &&
          historyData.map(
            (element, index) =>
              element.symbol !== "" > 0 &&
              index < 3 && (
                <PaintTransctions
                  key={index}
                  symbol={element.symbol}
                  amount={element.amount}
                ></PaintTransctions>
              )
          )}
      </View>
    </ScrollView>
  );
}
