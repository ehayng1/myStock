import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function PaintTransctions({ symbol, amount }) {
  return (
    <View
      style={{
        backgroundColor: "#EDE9D0",
        height: 55,
        borderRadius: 10,
        marginBottom: 15,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexGrow: 1,
            marginLeft: 15,

            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginBottom: 5,
              marginTop: 7,
            }}
          >
            {symbol}
          </Text>
          <Text style={{ fontSize: 12, color: "#5A5742" }}>{symbol}</Text>
        </View>
        <Text
          style={{
            marginTop: 10,
            // color: "#9A0000",
            // color: "#006100",
            color: amount > 0 ? "#9A0000" : "#006100",
            fontWeight: "600",
            fontSize: 18,
            justifyContent: "flex-end",
            marginRight: 20,
          }}
        >
          {amount > 0 ? "-" : "+"} $ {Math.abs(amount)}
        </Text>
      </View>
    </View>
  );
}
