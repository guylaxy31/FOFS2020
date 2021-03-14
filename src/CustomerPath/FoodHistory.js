import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const FoodHistory = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={{ marginBottom: 32, flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', paddingVertical: 16, backgroundColor: '#FFFEB8', borderRadius: 16 }}>
                        <MaterialCommunityIcons name="history" color={'#000'} size={32} style={{ marginRight: 8 }} />
                        <Text style={styles.StatusHeaderText}>ประวัติสั่งออเดอร์</Text>
                    </View>
                    <View style={styles.StatusHeaderContainer}>
                        <Text style={[styles.celltext, { marginLeft: 16 }]}>#</Text>
                        <Text style={[styles.celltext, { marginLeft: 40 }]}>วันที่</Text>
                        <Text style={[styles.celltext, { marginLeft: 88 }]}>ร้านอาหาร</Text>
                        <Text style={[styles.celltext, { marginLeft: 56 }]}>รายการ</Text>
                    </View>
                    <View style={[styles.StatusValueContainer, { marginBottom: 8 }]}>
                        <View style={[styles.dataincell, { width: 48 }]}><Text style={styles.celltext}>152</Text></View>
                        <View style={[styles.dataincell, { width: 80 }]}><Text style={styles.celltext}>23-01-64</Text></View>
                        <View style={[styles.dataincell, { width: 200 }]}><Text style={styles.celltext}>กับข้าวปาณี</Text></View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('FoodHistoryDetail')} style={styles.TouchDetailBtn}><MaterialIcons name="more-vert" size={24} color="black" /></TouchableOpacity>
                    </View>



                </View>

            </ScrollView>

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 56, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 18, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, borderRadius: 16 },

    StatusHeaderText: { fontFamily: 'pr-bold', fontSize: 18 },

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', marginBottom: 18 },
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: 16, marginLeft: 18 },
    HeaderTextCenter: { fontFamily: 'pr-reg', fontSize: 16 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 48 },

    dataincell: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center', paddingHorizontal: 4 },
    celltext: { fontFamily: 'pr-light', fontSize: 16 },
    StatusValueContainer: { width: '100%', flexDirection: 'row', marginVertical: 8 },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', alignSelf: 'center' },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', marginTop: 5 },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', marginRight: 32, alignItems: 'center', marginTop: 5 },
    ValueTextRightBtn: { fontFamily: 'pr-reg', fontSize: 16, color: '#000' },
    TouchDetailBtn: { marginRight: 32, paddingHorizontal: 8, paddingVertical: 8 }
});


export default FoodHistory