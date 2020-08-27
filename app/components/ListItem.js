import React from "react";
import {
    View,
    StyleSheet,
    Image
} from "react-native";
import AppText from "./AppText.js";

import colors from "../config/colors.json";

const ListItem = ({ title, subTitle, image }) =>
    <View style={styles.container}>
        <Image
            source={image}
            style={styles.image}
        />
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;