import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

export default function StockCard(props) {
  return (
    <View>
      <Pressable
        onPress={() =>
          props.nav.navigate("StockDetail", { symbol: props.symbol })
        }
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", flex: 3 }}>
            {" "}
            {props.symbol}
          </Text>
          {/* <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          > */}
          <Text style={{ fontWeight: "bold", fontSize: 16, flex: 3 }}>
            ${props.price}
          </Text>
          <Text
            style={[
              styles.font1,
              props.percent > 0 ? { color: "green" } : { color: "red" },
            ]}
          >
            {props.percent}%
          </Text>
          {/* </View> */}
        </View>
      </Pressable>
      <View style={{ height: 0.6, backgroundColor: "#808080" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  font1: {
    flex: 2,
    fontSize: 16,
    fontWeight: "500",
  },
});
