import React from "react";
// import WelcomeScreen from "./app/screens/WelcomeScreen.js";
// import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import {
  View,
  StyleSheet
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box2}></View>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box1: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    padding: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 30
  },
  box2: {
    backgroundColor: "gold",
    width: 50,
    height: 50
  },
  box3: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    margin: 20
  }
})