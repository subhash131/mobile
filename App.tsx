import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./components/auth";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Sign in with google</Text>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
