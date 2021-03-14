import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                        <Text style={styles.HeaderTextLeft}>#</Text>
                        <Text style={styles.HeaderTextCenter}>เวลา(น.)</Text>
                        <Text style={styles.HeaderTextCenter}>ร้านอาหาร</Text>
                        <Text style={styles.HeaderTextRight}>สถานะ</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>152</Text>
                        <Text style={styles.ValueTextCenter}>11:02</Text>
                        <Text style={styles.ValueTextCenter}>กับข้าวปาณี</Text>
                        <Text style={styles.ValueTextRight}>รอรับออเดอร์</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>153</Text>
                        <Text style={styles.ValueTextCenter}>12:06</Text>
                        <Text style={styles.ValueTextCenter}>ไก่ทอดหาดเล็ด</Text>
                        <Text style={styles.ValueTextRight}>กำลังปรุงอาหาร</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>153</Text>
                        <Text style={styles.ValueTextCenter}>12:06</Text>
                        <Text style={styles.ValueTextCenter}>ไก่ทอดหาดเล็ด</Text>
                        <Text style={styles.ValueTextRight}>อาหารเสร็จแล้ว</Text>
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

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: 16, marginLeft: 40 },
    HeaderTextCenter: { fontFamily: 'pr-reg', fontSize: 16 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 48 },

    StatusValueContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: 16, marginLeft: 40, color: '#888888' },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 32, color: '#000' }

});


export default FoodStatus