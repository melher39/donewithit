import React from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    Image
} from "react-native";
import AppButton from "../components/AppButton.js";
import AppText from "../components/AppText.js";

import colors from "../config/colors.json";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/background.jpg")}
                blurRadius={3}
            >
                <View style={styles.logoSection}>
                    <Image
                        style={styles.logoImage}
                        source={require("../assets/logo-red.png")}
                    />
                    <AppText style={styles.tagline}>Sell What You Don't Need</AppText>
                </View>
                <View style={styles.buttonSection}>
                    <AppButton style={styles.loginButton}>LOGIN</AppButton>
                    <AppButton style={styles.registerButton}>REGISTER</AppButton>
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
        flex: 1,
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
        alignItems: "center"
    },
    loginButton: {
        backgroundColor: colors.primary,
        marginBottom: 20
    },
    registerButton: {
        backgroundColor: colors.secondary,
        marginBottom: 20
    },
    tagline: {
        fontWeight: "bold",
        marginTop: 20
    }
});

export default WelcomeScreen;