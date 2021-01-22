import React from "react";
import {
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.json";
import chairImg from "../assets/chair.jpg";

const ViewImageScreen = () =>
    <SafeAreaView style={styles.container}>
        <Image
            resizeMode="contain"
            style={styles.image}
            source={chairImg}
        />
        <MaterialCommunityIcons
            name="close"
            size={35}
            style={styles.closeSquare}
        />
        <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            style={styles.deleteSquare}
        />
    </SafeAreaView>

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
        color: colors.white,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        left: 15
    },
    deleteSquare: {
        color: colors.white,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        right: 15
    }
});


export default ViewImageScreen;