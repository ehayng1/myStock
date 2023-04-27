import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

export default function SearchCard(props) {
  function handlePress() {
    // setAmount(amount - 1);
    alert("Press");
  }
  return (
    <View>
      <Pressable onPress={handlePress}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", flex: 1 }}>
            {" "}
            {props.symbol}
          </Text>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16, flex: 1 }}>
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
          </View>
        </View>
      </Pressable>
      <View style={{ height: 0.6, backgroundColor: "#808080" }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  font1: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
});
