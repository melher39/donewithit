import React from "react";
import {
  View,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText.js";

export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="email"
        size={60}
        color="dodgerblue"
      />
      <AppText>I love React Native</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});