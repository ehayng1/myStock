import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import fetchStockInfo from "./fetchStockInfo";

export default function StockDetail(symbol) {
  let stock = fetchStockInfo(symbol);
  let price = stock[1];
  let percent = stock[2];
  return (
    <View style={{ flexDirection: "col" }}>
      {/* <Text style={{ alignSelf: "center" }}>{stock[0]}</Text> */}
      <Text style={{ alignSelf: "center" }}>${price}</Text>
      <Text style={{ alignSelf: "center" }}>{percent}%</Text>
      <View
        style={{
          flexDirection: "row",
          //   alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={{ flex: 0.5, backgroundColor: "blue", borderRadius: 10 }}
        >
          <Text>Buy</Text>
        </Pressable>
        <Pressable style={{ flex: 0.5, backgroundColor: "red" }}>
          <Text>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
}
