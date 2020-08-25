import React from "react";
import {
  View,
  StyleSheet
} from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen.js";

export default function App() {
  return (
    <ListingDetailsScreen />
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