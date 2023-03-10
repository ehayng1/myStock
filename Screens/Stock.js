import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import PaintStock from "../Components/PaintStock";
import StockHeader from "../Components/StockHeader";
import SearchStock from "../Components/SearchBox";

const API_KEY = "OO2OADYEAGG4V90D";
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cfvvpm1r01qmgsjq9l0gcfvvpm1r01qmgsjq9l10";
const finnhubClient = new finnhub.DefaultApi();
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3237c553e5mshde123631b52135cp166f44jsn5c0fc8607fce",
    "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
  },
};

export default function Stock() {
  const popular = [];
  const losers = [];
  const gainers = [];
  // fetch(
  //   "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/most_actives?start=0",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     popular.push(response.quotes[0].symbol);
  //     popular.push(response.quotes[1].symbol);
  //     popular.push(response.quotes[2].symbol);
  //     console.log(popular);
  //   })
  //   .catch((err) => console.error(err));

  // fetch(
  //   "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_losers?start=0",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     losers.push(response.quotes[0].symbol);
  //     losers.push(response.quotes[1].symbol);
  //     losers.push(response.quotes[2].symbol);
  //     console.log(losers);
  //   })
  //   .catch((err) => console.error(err));

  // fetch(
  //   "https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_gainers?start=0",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     gainers.push(response.quotes[0].symbol);
  //     gainers.push(response.quotes[1].symbol);
  //     gainers.push(response.quotes[2].symbol);
  //     console.log(gainers);
  //   })
  //   .catch((err) => console.error(err));

  return (
    <ScrollView>
      <SearchStock></SearchStock>
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ marginBottom: 15, marginTop: 25 }}>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Most popular stocks
          </Text>
        </View>
        <StockHeader></StockHeader>

        <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
        <PaintStock symbol="TSLA"></PaintStock>
        <PaintStock symbol="AMZN"></PaintStock>
        <PaintStock symbol="IBM"></PaintStock>

        <View style={{ marginBottom: 15, marginTop: 25 }}>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Top gainers today
          </Text>
        </View>
        <StockHeader></StockHeader>
        <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
        <PaintStock symbol="AAPL"></PaintStock>
        <PaintStock symbol="HCM"></PaintStock>
        <PaintStock symbol="META"></PaintStock>

        <View style={{ marginBottom: 15, marginTop: 25 }}>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Top losers today
          </Text>
        </View>
        <StockHeader></StockHeader>
        <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
        <PaintStock symbol="DSEY"></PaintStock>
        <PaintStock symbol="GOOGL"></PaintStock>
        <PaintStock symbol="META"></PaintStock>
      </View>
    </ScrollView>
  );
}
