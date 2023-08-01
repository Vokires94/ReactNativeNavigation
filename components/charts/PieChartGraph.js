import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function PieChartGraph({ navigation }) {

    return (
        <View style={{ flex: 1, borderWidth: 1 }}>
            <Text>Bezier Line Chart</Text>
            <PieChart
                data={[
                    {
                        name: 'Seoul',
                        population: 21500000,
                        color: 'rgba(131, 167, 234, 1)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 12,
                    },
                    {
                        name: 'Toronto',
                        population: 2800000,
                        color: '#F00',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 12,
                    },
                    {
                        name: 'New York',
                        population: 8538000,
                        color: '#ffffff',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 12,
                    },
                    {
                        name: 'Moscow',
                        population: 11920000,
                        color: 'rgb(0, 0, 255)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 12,
                    },
                ]}
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
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="1"
                absolute //for the absolute number remove if you want percentage
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

