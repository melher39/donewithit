import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";
import AppText from "./AppText.js";

import colors from "../config/colors.json";

const ListItem = ({ title, subTitle, image, onPress }) =>
    <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
    >
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
    </TouchableHighlight>

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
});

export default ListItem;