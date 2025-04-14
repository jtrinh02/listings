import { View, Text, StyleSheet } from "react-native";
import EbayButton from "../components/EbayButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style = {styles.header}>Welcome to eBay Listings</Text>
      <EbayButton
        title="Log in with eBay"
        onPress={() => console.log("Login pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 24,
    color: "#333",
  },
  buttonText: {
    color: "#007eb9",
    fontWeight: "bold",
  },
});
