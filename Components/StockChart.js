import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import fetchPriceData from "./fetchPriceData";
import options from "../config";
const screenWidth = Dimensions.get("window").width * 0.9;

export default function StockChart({ Symbol, Range, Interval }) {
  // const [priceData, setPriceData] = React.useState({ data: [], loading: true });
  const [price, setPrice] = React.useState([0, 0, 0]);

  let Xvalues = [];
  let Yvalues = [];

  useEffect(() => {
    fetch(
      "https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=" +
        Interval +
        "&symbol=" +
        Symbol +
        "&range=" +
        Range +
        "&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let res = response.chart.result[0];
        yVal = res.indicators.quote[0].close;
        xVal = res.timestamp;

        for (let key in yVal) {
          Yvalues.push(yVal[key]);
        }
        for (let key in xVal) {
          Xvalues.push(xVal[key]);
        }
        // console.log(Yvalues);
        setPrice(Yvalues);
      })
      .catch((err) => console.error(err));
  }, [Range, Interval]);

  // price = [Xvalues, Yvalues];
  // console.log(price);

  // setPrice(fetchPriceData(Symbol, Range, Interval));
  // console.log("Price: ", price);

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
  const data = {
    // labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: price,
        // color: (opacity = 0) => `rgba(217, 48, 37, ${opacity})`, // red
        color: (opacity = 0) => `rgba(29,128,56, ${opacity})`, // green
        strokeWidth: 2, // optional
      },
    ],
    legend: [Symbol], // optional
  };
  // console.log("Data: ", data);

  let index = [];
  for (let i = 0; i < price.length; i++) {
    index.push(i);
  }

  {
    return (
      <LineChart
        style={{ marginLeft: Dimensions.get("window").width * 0.02 }}
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        hidePointsAtIndex={index}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel="$"
        bezier
      />
    );
  }
}
