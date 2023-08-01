import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Charts({ navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{'Here should be Charts!'}</Text>
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