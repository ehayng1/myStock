import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { data } from "../data/data";
import SearchCard from "./SearchCard";
import PaintStock from "./PaintStock";
import { MaterialIcons } from "@expo/vector-icons";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cfvvpm1r01qmgsjq9l0gcfvvpm1r01qmgsjq9l10";
const finnhubClient = new finnhub.DefaultApi();

function handlePress() {
  alert("Press");
}

export default function searchStock() {
  const [filteredStringArray, setFilteredStringArray] = useState([]);
  const updateArray = (text) => {
    let count = 0;
    console.log(text);
    // both array and text lowercase to make case-insensitive.
    let filtered = data.filter((item) => {
      if (
        (item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.symbol.toLowerCase().includes(text.toLowerCase())) &&
        count < 10
      ) {
        count++;
        return true;
      }
      return false;
    });
    console.log("Filtered array:", filtered);
    console.log("Length of the filtered:", count);
    setFilteredStringArray(filtered);
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <MaterialIcons
          name="search"
          size="30"
          style={{ justifyContent: "center", marginRight: 5 }}
        />
        <TextInput
          style={{
            height: 40,
            // margin: 12,
            // marginBottom: 12,
            borderWidth: 1,
            borderRadius: 15,
            padding: 10,
            width: "90%",
          }}
          placeholder={"Search symbol/name"}
          onChangeText={(text) => {
            updateArray(text);
          }}
        />
      </View>
      {filteredStringArray.map((el, ind) => (
        <Pressable style={{}} onPress={handlePress}>
          <View style={{}}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {filteredStringArray[ind].name}
            </Text>
            <Text style={{ color: "#808080" }}>
              {filteredStringArray[ind].symbol}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              marginTop: 10,
              height: 0.6,
              backgroundColor: "#808080",
            }}
          ></View>
        </Pressable>
      ))}
    </View>
  );
}
