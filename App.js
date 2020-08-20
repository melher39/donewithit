import React from "react";
// import WelcomeScreen from "./app/screens/WelcomeScreen.js";
// import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import {
  View,
  StyleSheet,
  Text
} from "react-native";

import AppText from "./app/components/AppText.js";

export default function App() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text1}>I love React Native. Let's just keep talking and talking and see what happends. No biggie.</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text1: {
    fontSize: 30,
    // fontFamily: "Courier"
    fontStyle: "italic",
    fontWeight: "bold",
    color: "red",
    textTransform: "uppercase",
    // textDecorationLine: "line-through"
    textAlign: "justify",
    lineHeight: 60
  }
})