import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function PaintTransctions({ symbol, amount }) {
  return (
    <View
      style={{
        backgroundColor: "#EDE9D0",
        height: "8%",
        borderRadius: 10,
        marginBottom: "2%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <View
          style={{
            flexGrow: 1,
            marginLeft: "4%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginBottom: "2%",
              marginTop: "4%",
            }}
          >
            {symbol}
          </Text>
          <Text style={{ fontSize: 12, color: "#5A5742", marginLeft: "2%" }}>
            {symbol}
          </Text>
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
          {amount > 0 ? "-" : "+"} $ {Math.abs(amount).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}
