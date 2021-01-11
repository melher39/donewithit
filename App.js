import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";

export default function App() {
  return (
    // <ViewImageScreen/>
    <WelcomeScreen/>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100
  }
});