import React from "react";
import {
  StyleSheet
} from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen.js";
import MessagesScreen from "./app/screens/MessagesScreen.js";
import ViewImageScreen from "./app/screens/ViewImageScreen.js";
import WelcomeScreen from "./app/screens/WelcomeScreen.js";

export default function App() {
  return (
    // <ViewImageScreen/>
    // <WelcomeScreen/>
    // <ListingDetailsScreen/>
    <MessagesScreen/>
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