import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


const FoodHistoryDetail = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.TitleDetailText}>หมายเลขออเดอร์</Text>
                            <Text style={styles.TitleDetailText}>วันที่</Text>
                            <Text style={styles.TitleDetailText}>เวลา(น.)</Text>
                            <Text style={styles.TitleDetailText}>ร้านอาหาร</Text>

                        </View>
                        <View style={{ marginRight: 'auto' }}>
                            <Text style={styles.AValueDetailText}>152</Text>
                            <Text style={styles.AValueDetailText}>26 ม.ค. 64</Text>
                            <Text style={styles.AValueDetailText}>12:04</Text>
                            <Text style={styles.AValueDetailText}>ป้าพร</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.TitleDetailText}>รายการที่สั่ง</Text>
                        </View>
                        <View style={{ marginRight: 'auto' }}>
                            <View style={{ flexDirection: 'row', marginLeft: 65 }}>
                                <View>
                                    <Text style={styles.ValueDetailText}>ข้าวผัด</Text>
                                    <Text style={styles.ValueDetailText}>ก๋วยเตี๋ยว</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}><Text style={styles.PriceValueDetailText}>35</Text><Text style={styles.UnitValueDetailText}>฿</Text></View>
                                    <View style={{ flexDirection: 'row' }}><Text style={styles.PriceValueDetailText}>30</Text><Text style={styles.UnitValueDetailText}>฿</Text></View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FFFC1B', width: '100%', marginTop: 20, paddingVertical: 5 }}>
                        <View>
                            <Text style={styles.TotalTitleDetailText}>รวมยอด</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.TotalValueDetailText}>55</Text><Text style={styles.TotalUnitValueDetailText}>฿</Text></View>
                        </View>
                    </View>

                </View>

            </ScrollView>

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 50, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    TitleDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#000' },
    AValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: 'gray', marginLeft: 35 },
    ValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: 'gray' },
    PriceValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: 'gray', marginLeft: 15 },
    UnitValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: 'gray', marginLeft: 5 },

    TotalValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000', marginLeft: 15 },
    TotalUnitValueDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: 'gray', marginLeft: 5 },
    TotalTitleDetailText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000' }

});


export default FoodHistoryDetail