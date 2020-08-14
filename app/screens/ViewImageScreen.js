import React from "react";
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from "react-native";

import colors from "../config/colors.js"

const ViewImageScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
            <View style={styles.closeSquare} />
            <View style={styles.deleteSquare} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    image: {
        // resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    closeSquare: {
        backgroundColor: colors.primary,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        left: 15,
        height: 50,
        width: 50
    },
    deleteSquare: {
        backgroundColor: colors.secondary,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        right: 15,
        height: 50,
        width: 50
    }
});


export default ViewImageScreen;