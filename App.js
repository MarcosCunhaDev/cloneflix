import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RouterComponent from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{ flex: 1 }}>
        <RouterComponent />
      </View>
    </>
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
