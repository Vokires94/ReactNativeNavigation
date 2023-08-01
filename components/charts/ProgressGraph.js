import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

export default function ProgressGraph({ navigation }) {

    return (
        <View style={{ flex: 1, borderWidth: 1 }}>
            <Text>Contribution Graph</Text>
            <ProgressChart
                data={[0.4, 0.6, 0.8]}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

