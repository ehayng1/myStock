import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
// import FetchStock from "../Components/FetchStock";
import StockHeader from "../Components/StockHeader";
import PaintStock from "../Components/PaintStock";

const API_KEY = "OO2OADYEAGG4V90D";
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cfvvpm1r01qmgsjq9l0gcfvvpm1r01qmgsjq9l10";
const finnhubClient = new finnhub.DefaultApi();

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

export default function Trade() {
  const [newArray, setNewArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [stringArray, setStringArray] = useState([
    "Hello",
    "Bye",
    "Hello World",
    "Computer",
    "Science",
    "Programming",
    "Coding",
  ]);
  const [filteredStringArray, setFilteredStringArray] = useState([
    "Hello",
    "Bye",
    "Hello World",
    "Computer",
    "Science",
    "Programming",
    "Coding",
  ]);
  const [search, setSearch] = useState("");

  const changeArray = () => {
    setStringArray(["New", "Array", "Content"]);
  };

  const updateArray = (e) => {
    var search = e.toLowerCase();
    var array = stringArray;
    array = array.filter((e) => {
      return e.toLowerCase().includes(search);
    });
    setFilteredStringArray(array);
  };
  return (
    // <View>
    //   <View
    //     style={{
    //       flex: 1,
    //       alignItems: "center",
    //       marginTop: 40,
    //     }}
    //   >
    //     <TextInput
    //       style={{
    //         backgroundColor: "#DDDDDD",
    //         width: "90%",
    //         padding: 10,
    //         borderRadius: 10,
    //         marginBottom: 10,
    //       }}
    //       placeholder={"Search"}
    //       onChangeText={(e) => {
    //         updateArray(e);
    //       }}
    //     />
    //     {filteredStringArray.map((el, ind) => (
    //       <View
    //         style={{
    //           backgroundColor: "#6096B4",
    //           width: "90%",
    //           marginVertical: 10,
    //           padding: 15,
    //           borderRadius: 10,
    //         }}
    //         key={ind}
    //       >
    //         <Text
    //           style={{
    //             color: "white",
    //           }}
    //         >
    //           Element is: {el}
    //         </Text>
    //       </View>
    //     ))}
    //   </View>
    // </View>
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ marginBottom: 15, marginTop: 25 }}>
        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
          Favorite Stocks
        </Text>
      </View>
      <StockHeader></StockHeader>
      <View style={{ height: "0.1%", backgroundColor: "#808080" }}></View>
      <PaintStock symbol="GOOGL"></PaintStock>
      <PaintStock symbol="AMZN"></PaintStock>
      <PaintStock symbol="META"></PaintStock>
    </View>
  );
}
