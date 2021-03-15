import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { normalize } from 'react-native-elements';

const FoodStatus = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={{ marginBottom: 32, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', paddingVertical: 16, backgroundColor: '#FFFEB8', borderRadius: 16 }}>
                        <MaterialCommunityIcons name="silverware" size={32} color="black" style={{ marginRight: 8 }} />
                        <Text style={styles.StatusHeaderText}>สถานะออเดอร์</Text>
                    </View>
                    <View style={styles.StatusHeaderContainer}>
                        <Text style={[styles.HeaderText, { flex: .7 }]}>#</Text>
                        <Text style={[styles.HeaderText, { flex: 1 }]}>เวลา(น.)</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>ร้านอาหาร</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>สถานะ</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={[styles.HeaderText, { flex: .7 }]}>152</Text>
                        <Text style={[styles.HeaderText, { flex: 1 }]}>11:58</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>ตามสั่งนายวรัญ</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>อาหารเสร็จแล้ว</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={[styles.HeaderText, { flex: .7 }]}>152</Text>
                        <Text style={[styles.HeaderText, { flex: 1 }]}>12:10</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>ตำยำแหลก</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>กำลังปรุงอาหาร</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={[styles.HeaderText, { flex: .7 }]}>152</Text>
                        <Text style={[styles.HeaderText, { flex: 1 }]}>12:34</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>ข้าวมันไก่หลังมอ</Text>
                        <Text style={[styles.HeaderText, { flex: 2 }]}>รอรับออเดอร์</Text>
                    </View>
                </View>

            </ScrollView>

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 56, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 24, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, borderRadius: 16, paddingBottom: 24 },

    StatusHeaderText: { fontFamily: 'pr-bold', fontSize: 18 },

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
    HeaderText: { fontFamily: 'pr-light', fontSize: 16, textAlign: 'center' },


    StatusValueContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16, flexWrap: 'wrap' },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: 16, marginLeft: 40, color: '#888888' },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 32, color: '#000' }

});


export default FoodStatus