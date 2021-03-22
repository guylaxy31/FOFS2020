import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text } from 'react-native';


class HistoryList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardcontainer}>
                    <View style={styles.YellowBar}></View>

                    <View style={styles.FirstRow}>
                        <View><Text style={styles.OrderNumberTextTitle}>หมายเลขออเดอร์</Text></View>
                        <View><Text style={styles.OrderNumberTextValue}>152</Text></View>

                        <View style={{ marginLeft: 'auto' }}><Text style={styles.TimeValueText}>11:15</Text></View>
                        <View style={{ marginLeft: 5 }}><Text style={styles.TimeUnitText}>น.</Text></View>
                    </View>

                    <View style={styles.MenuRow}>
                        <View><Text style={styles.MenuText}>ข้าวผัดหมู</Text></View>
                        <View style={{ marginLeft: 'auto', marginRight: 50 }}><Text style={styles.CountingText}>1</Text></View>
                        <View><Text style={styles.PricesText}>25 ฿</Text></View>
                    </View>

                    <View style={styles.TotalCountsRow}>
                        <Text style={styles.TotalCountsText}>รวม 1 รายการ</Text>
                    </View>

                    <View style={styles.TotalPricesRow}>
                        <Text style={styles.TotalPricesText}>25 ฿</Text>
                    </View>


                </View >
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#fff', alignItems: 'center', backgroundColor: '#FFF' },
    cardcontainer: { width: 500 / Dimensions.get('window').width + 350, backgroundColor: '#fff', alignSelf: 'center', marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 5, shadowOpacity: 0.26, marginTop: 20 },

    YellowBar: { width: '100%', backgroundColor: 'yellow', height: 10 },

    FirstRow: { flexDirection: 'row', padding: 20, alignItems: 'center' },
    IndexText: { fontFamily: 'pr-reg', marginRight: 15 },
    OrderNumberTextTitle: { fontFamily: 'pr-reg', marginRight: 8 },
    OrderNumberTextValue: { fontFamily: 'pr-reg', color: '#8B8B8B' },

    TimeValueText: { fontFamily: 'pr-reg', color: '#8B8B8B' },
    TimeUnitText: { fontFamily: 'pr-reg' },

    SecondRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center' },
    CustomerNameText: { fontFamily: 'pr-reg', color: '#8B8B8B', marginTop: -10 },

    MenuRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20, alignItems: 'center' },
    MenuText: { fontFamily: 'pr-reg' },
    CountingText: { fontFamily: 'pr-reg' },
    PricesText: { fontFamily: 'pr-reg', color: '#CECEB7' },

    TotalCountsRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 5 },
    TotalCountsText: { fontFamily: 'pr-bold', marginLeft: 'auto' },

    TotalPricesRow: { flexDirection: 'row', paddingHorizontal: 20, marginBottom: 16 },
    TotalPricesText: { fontFamily: 'pr-bold', color: '#A7A799', marginLeft: 'auto', fontSize: Dimensions.get('window').height * .03 },

})

export default HistoryList