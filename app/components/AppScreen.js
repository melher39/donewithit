import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const AppScreen = ({ children }) =>
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    }
});

export default AppScreen;