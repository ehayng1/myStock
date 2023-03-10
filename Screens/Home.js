import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchStock from "../Components/SearchBox";
import StockDetail from "../Components/StockDetail";

export default function Home() {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Weekly Performance
        </Text>
      </View>
      <View style={{ marginBottom: 15, marginTop: 250 }}>
        <Text style={{ fontSize: 21, fontWeight: "bold" }}>
          Today Transactions
        </Text>
      </View>
      <StockDetail symbol="AAPL"></StockDetail>
    </View>
  );
}
