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
                        <Text style={[styles.celltext, { flex: .7 }]}>#</Text>
                        <Text style={[styles.celltext, { flex: 1 }]}>วันที่</Text>
                        <Text style={[styles.celltext, { flex: 2 }]}>ร้านอาหาร</Text>
                        <Text style={[styles.celltext, { flex: 1 }]}>รายการ</Text>
                    </View>
                    <View style={[styles.StatusValueContainer, { marginBottom: 8 }]}>
                        <View style={[styles.celltext, { flex: .7 }]}><Text style={styles.celltext}>152</Text></View>
                        <Text style={[styles.celltext, { flex: 1 }]}>23-01-64</Text>
                        <Text style={[styles.celltext, { flex: 2 }]}>ตามสั่งนายวรัญ</Text>
                        <View style={{ flex: 1 }}><TouchableOpacity onPress={() => props.navigation.navigate('FoodHistoryDetail')} style={styles.TouchDetailBtn}><MaterialIcons name="more-vert" size={24} color="black" /></TouchableOpacity>
                        </View>
                    </View>




                </View>

            </ScrollView >

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 56, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 16, width: 376, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, borderRadius: 16, paddingBottom: 24 },

    StatusHeaderText: { fontFamily: 'pr-bold', fontSize: 18 },

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', marginBottom: 18, justifyContent: 'space-around' },
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: 16, marginLeft: 18 },
    HeaderTextCenter: { fontFamily: 'pr-reg', fontSize: 16 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 48 },

    dataincell: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center', paddingHorizontal: 4 },
    celltext: { fontFamily: 'pr-light', fontSize: 16, textAlign: 'center' },
    StatusValueContainer: { width: '100%', flexDirection: 'row', marginVertical: 8, justifyContent: 'space-around' },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', alignSelf: 'center' },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', alignItems: 'center', marginTop: 5 },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: 16, color: '#888888', marginRight: 32, alignItems: 'center', marginTop: 5 },
    ValueTextRightBtn: { fontFamily: 'pr-reg', fontSize: 16, color: '#000' },
    TouchDetailBtn: { alignItems: 'center' }
});


export default FoodHistory