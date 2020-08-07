import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableNativeFeedback, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
      color="orange"
      title="Click me" onPress={() => console.log("Button tapped")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
