import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const API_KEY = "OO2OADYEAGG4V90D";
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cfvvpm1r01qmgsjq9l0gcfvvpm1r01qmgsjq9l10";
const finnhubClient = new finnhub.DefaultApi();

export default function fetchStockInfo({ symbol }) {
  const [price, setPrice] = React.useState();
  const [percent, setPercent] = React.useState();
  const [amount, setAmount] = React.useState(0);
  let API_Symbol = symbol;
  let API_Call =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" +
    API_Symbol +
    "&apikey=" +
    API_KEY;
  let Xvalues = [];
  let Yvalues = [];

  finnhubClient.quote(symbol, (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      // fetching the price
      setPrice(data.c);
      // fetch & calculating the percentage
      let percent = ((price - data.pc) / data.pc) * 100;
      setPercent(Math.round(percent * 100) / 100);
    }
  });

  // x and y values
  fetch(API_Call)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var key in data["Time Series (Daily)"]) {
        Xvalues.push(key);
        Yvalues.push(data["Time Series (Daily)"][key]["2. high"]);
      }
    });
  stock = [API_Symbol, price, percent, Xvalues, Yvalues];
  console.log(stock);
  return stock;
}
