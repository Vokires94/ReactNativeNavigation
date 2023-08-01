import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Homepage({ navigation, route }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.params?.message || 'Welcome!'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: 'red',
    }
});
