import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors.json";

const AppCard = ({ title, subTitle, image }) =>
    <View style={styles.card}>
        <Image
            style={styles.image}
            source={image}
        />
        <View style={styles.textArea}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        height: 200,
        width: "100%"
    },
    textArea: {
        padding: 20
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
});

export default AppCard;