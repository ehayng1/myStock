import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import StockCard from "../Components/StockCard";
import StockHeader from "../Components/StockHeader";
import SearchStock from "../Components/SearchBox";
import StockDetail from "../Components/StockDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import options from "../config";

function Stock({ navigation }) {
  const [stockData, setStockData] = React.useState([]);
  const [symbolList, setSymbolList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getStockInfo = async (symbol) => {
    let symbolStr = "";
    for (let i = 0; i < symbol.length; i++) {
      symbolStr = symbolStr + "%2C" + symbol[i];
    }
    symbolStr = symbolStr.slice(3);
    console.log("symbolstr: ", symbolStr);
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=" +
        symbolStr,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("Res: ", response);
        let data = response.quoteResponse.result;
        let tempData = [];
        data.forEach((el) => {
          tempData.push({
            symbol: el.symbol,
            price: el.regularMarketPrice,
            percent: el.regularMarketChangePercent.toFixed(2),
          });
        });
        setStockData(tempData);
        console.log("StockData: ", stockData);
        setIsLoading(false);
      })
      .catch((err) => console.error("ERROR: ", err));
  };
  const getTrend = async () => {
    setIsLoading(true);
    let tempArr = [];

    fetch(
      "https://yh-finance.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&count=6&start=0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        tempArr.push(response.finance.result[0].quotes[0].symbol);
        tempArr.push(response.finance.result[0].quotes[1].symbol);
        tempArr.push(response.finance.result[0].quotes[2].symbol);
        tempArr.push(response.finance.result[1].quotes[0].symbol);
        tempArr.push(response.finance.result[1].quotes[1].symbol);
        tempArr.push(response.finance.result[1].quotes[2].symbol);
        tempArr.push(response.finance.result[2].quotes[0].symbol);
        tempArr.push(response.finance.result[2].quotes[1].symbol);
        tempArr.push(response.finance.result[2].quotes[2].symbol);
        console.log("temp: ", tempArr);
        setSymbolList([...tempArr]);
      })
      .catch((err) => console.error("ERROR2: ", err));
  };

  useEffect(() => {
    const init = async () => {
      await getTrend();
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      await getStockInfo(symbolList);
    };
    init();
  }, [symbolList]);

  return (
    <ScrollView>
      {isLoading ? (
        <View style={{ marginTop: "60%" }}>
          <ActivityIndicator size="large" color="#D84315" />
          <Text style={{ textAlign: "center", fontSize: 16, marginTop: 10 }}>
            Reading data from server...
          </Text>
        </View>
      ) : (
        <>
          <SearchStock nav={navigation}></SearchStock>

          <View style={{ marginHorizontal: "5%" }}>
            <View style={{ marginBottom: "5%", marginTop: "5%" }}>
              <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                Top gainers today
              </Text>
            </View>
            <StockHeader></StockHeader>
            <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>

            {stockData
              .slice(0, 3)
              .map(
                (el, index) =>
                  stockData[index].percent > 0 && (
                    <StockCard
                      key={new Date().getTime().toString() + index}
                      symbol={stockData[index].symbol}
                      price={stockData[index].price}
                      percent={stockData[index].percent}
                      nav={navigation}
                    ></StockCard>
                  )
              )}
            <View style={{ marginBottom: "5%", marginTop: "10%" }}>
              <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                Top losers today
              </Text>
            </View>
            <StockHeader></StockHeader>
            <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
            {stockData
              .slice(3, 6)
              .map(
                (el, index) =>
                  stockData[index + 3].percent < 0 && (
                    <StockCard
                      key={new Date().getTime().toString() + index}
                      symbol={stockData[index + 3].symbol}
                      price={stockData[index + 3].price}
                      percent={stockData[index + 3].percent}
                      nav={navigation}
                    ></StockCard>
                  )
              )}
            <View style={{ marginBottom: "5%", marginTop: "10%" }}>
              <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                Most popular stocks
              </Text>
            </View>
            <StockHeader></StockHeader>
            <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
            {stockData.slice(6).map((el, index) => (
              <StockCard
                key={new Date().getTime().toString() + index}
                symbol={stockData[index + 6].symbol}
                price={stockData[index + 6].price}
                percent={stockData[index + 6].percent}
                nav={navigation}
              ></StockCard>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}
const Stack = createNativeStackNavigator();
export default function StockTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stock"
        component={Stock}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="StockDetail"
        component={StockDetail}
        options={{ title: "Stock Detail", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
