import React from "react";
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from "react-native";

const ViewImageScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Image
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
        backgroundColor: "black"
    },
    image: {
        resizeMode: "contain",
        height: "100%",
        width: "100%"
    },
    closeSquare: {
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        left: 15,
        height: 50,
        width: 50
    },
    deleteSquare: {
        backgroundColor: "#4ECDC4",
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        right: 15,
        height: 50,
        width: 50
    }
});


export default ViewImageScreen;