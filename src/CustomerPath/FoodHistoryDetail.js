import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


const FoodHistoryDetail = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={styles.rowcontent}>
                        <Text style={[styles.TitleDetailText, { flex: 1 }]}>หมายเลขออเดอร์</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1.5 }]}>152</Text>
                    </View>
                    <View style={styles.rowcontent}>
                        <Text style={[styles.TitleDetailText, { flex: 1 }]}>วันที่</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1.5 }]}>23-01-64</Text>
                    </View>
                    <View style={styles.rowcontent}>
                        <Text style={[styles.TitleDetailText, { flex: 1 }]}>ร้านอาหาร</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1.5 }]}>ตามสั่งนายวรัญ</Text>
                    </View>
                    <View style={styles.rowcontent}>
                        <Text style={[styles.TitleDetailText, { flex: 1 }]}>รายการที่สั่ง</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1.5 }]}></Text>
                        <Text style={[styles.AValueDetailText, { flex: .5 }]}></Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 48 }}>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>ข้าวผัด</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>30 ฿</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 48 }}>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>ข้าวผัด</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>30 ฿</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 48 }}>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>ข้าวผัด</Text>
                        <Text style={[styles.AValueDetailText, { flex: 1 }]}>30 ฿</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginTop: 18, paddingVertical: 8, paddingLeft: 24 }}>

                        <Text style={[styles.TotalTitleDetailText, { flex: .7 }]}>รวมทั้งหมด</Text>
                        <Text style={[styles.TotalTitleDetailText, { flex: 1 }]}>90 ฿</Text>

                    </View>

                </View>

            </ScrollView>

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 48, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 48, borderRadius: 16 },

    rowcontent: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 24, marginBottom: 8 },
    TitleDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: '#000', textAlign: 'left' },
    AValueDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray', textAlign: 'left' },
    menuValueDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray', width: 148, marginBottom: 4 },
    ValueDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray' },
    UnitValueText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: 48 },
    PriceValueDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray', marginLeft: 8 },
    UnitValueDetailText: { fontFamily: 'pr-reg', fontSize: 16, color: 'gray' },

    TotalValueDetailText: { fontFamily: 'pr-bold', fontSize: 18, color: '#000', marginLeft: 16, width: 256, },
    TotalUnitValueDetailText: { fontFamily: 'pr-reg', fontSize: 18, color: '#000', marginLeft: 8 },
    TotalTitleDetailText: { fontFamily: 'pr-reg', fontSize: 24, color: '#000' }

});


export default FoodHistoryDetail