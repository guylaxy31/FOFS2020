import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";



export default class RestaurantAnalyticContainer extends Component {



    render() {



        return (
            <View style={styles.container}>
                <View style={styles.CardContainer}>
                    <View><Text style={styles.TotalText}>ยอดรวมของร้านอาหาร</Text></View>

                    <View style={styles.LineChartContainer}>

                        <LineChart
                            data={{
                                labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width * 0.9} // from react-native
                            height={220}

                            yAxisSuffix=" ฿"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#FFFFEF",
                                backgroundGradientTo: "#F1F1E7",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(87, 195, 192, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#378885"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>

                    <View style={styles.dataContainer}>

                        <View style={styles.column1}>
                            <Text style={styles.changeFont}>ยอดสูงสุดที่ช่วง</Text>
                            <Text style={styles.changeFont}>ยอดทั้งหมด</Text>
                            <Text style={styles.changeFont}>เทียบกับก่อนหน้า</Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.changeFont}>13:00</Text>
                            <Text style={styles.changeFont}>2,320</Text>
                            <Text style={styles.changeFont}>200</Text>
                        </View>
                        <View>
                            <Text style={styles.changeFont}>น.</Text>
                            <Text style={styles.changeFont}>บาท</Text>
                            <Text style={styles.changeFont}>บาท</Text>
                        </View>
                    </View>



                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    }, TotalText: {
        fontFamily: 'pr-bold',
        fontSize: 16,
        marginBottom: 16
    }
    , CardContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',

        padding: 20,
        alignContent: 'center',
        backgroundColor: '#FFF'

    }, dataContainer: {
        flex: 1,
        flexDirection: 'row',

        width: '100%',

    }

    , column1: {
        marginRight: 20
    },
    column2: {
        marginRight: 10
    }, changeFont: {
        fontFamily: 'pr-reg',
        fontSize: 16
    }, LineChartContainer: {

        marginBottom: '5%'
    }
});


