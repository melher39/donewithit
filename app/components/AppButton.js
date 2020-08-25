import React from "react";
import { TouchableHighlight, StyleSheet, Platform, Text } from "react-native";

import colors from "../config/colors.json";
import AppText from "./AppText.js";

const AppButton = ({ children, style }) =>
    <TouchableHighlight
        style={[styles.button, style]}
    >
        <AppText style={styles.buttonText}>{children}</AppText>
    </TouchableHighlight>

const styles = StyleSheet.create({
    button: {
        width: "90%",
        padding: 12,
        borderRadius: 50,
        alignItems: "center"
    },
    buttonText: {
        color: colors.white
    }
});

export default AppButton;