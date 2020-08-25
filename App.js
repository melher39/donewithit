import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen.js";

export default function App() {
  return (
    <ViewImageScreen/>
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