import React from "react";
import { Text, Image, StyleSheet, Platform, View } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors.json";

const AppCard = ({ title, subTitle, image }) =>
    <View style={styles.view}>
        <Image
            style={[styles.image]}
            source={image}
            resizeMode="contain"
        />
        <View style={styles.textArea}>
            <AppText>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "center"
    },
    image: {
        height: "80%",
        width: "100%",
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    textArea: {
        flex: 1,
        alignSelf: "flex-start",
        left: 80,
        marginTop: 20
    },
    title: {

    },
    subTitle: {
        color: colors.secondary
    }
});

export default AppCard;