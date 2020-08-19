import React from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    Image
} from "react-native";

import colors from "../config/colors.json";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/background.jpg")}
            >
                <View style={styles.logoSection}>
                    <Image
                        style={styles.logoImage}
                        source={require("../assets/logo-red.png")}
                    />
                    <Text>Sell What You Don't Need</Text>
                </View>
                <View style={styles.buttonSection}>
                    <View style={styles.loginButton} />
                    <View style={styles.registerButton} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1
    },
    logoImage: {
        height: 100,
        width: 100
    },
    logoSection: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    buttonSection: {
        flex: 2,
        justifyContent: "flex-end",
        height: "20%"
    },
    loginButton: {
        backgroundColor: colors.primary,
        height: "15%"
    },
    registerButton: {
        backgroundColor: colors.secondary,
        height: "15%"
    }
});

export default WelcomeScreen;