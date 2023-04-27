import { Text, View } from "react-native";

export default function StockHeader() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
        color: "#808080",
      }}
    >
      <Text style={{ color: "#808080", flex: 3 }}> Asset</Text>
      {/* <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      > */}
      <Text style={{ color: "#808080", flex: 3 }}> Price</Text>
      <Text style={{ color: "#808080", flex: 2 }}> Daily</Text>
      {/* </View> */}
    </View>
  );
}
