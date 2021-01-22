import React from "react";
import {
    StyleSheet,
    View,
    Image
} from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem.js";

import colors from "../config/colors.json";

const ListingDetailsScreen = (props) =>
    <View>
        <Image
            source={require("../assets/jacket.jpg")}
            style={styles.image}
        />
        <View style={styles.textArea}>
            <AppText style={styles.title}>
                Red jacket for sale
            </AppText>
            <AppText style={styles.price}>
                $100
            </AppText>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/mosh.jpg")}
                    title="Mosh Hamedami"
                    subTitle="5 Listings"
                />
            </View>
        </View>
    </View>

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    textArea: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        fontSize: 20,
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
});

export default ListingDetailsScreen;