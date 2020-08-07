import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableNativeFeedback } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed.");

  return (
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={handlePress}
      >
        Hello React Native
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("tapped.")}>
        <View
        style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}
        >

        </View>
      </TouchableNativeFeedback>

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
