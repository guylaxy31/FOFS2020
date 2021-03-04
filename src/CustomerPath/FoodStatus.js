import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


const FoodStatus = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.StatusHeaderText}>ตรวจสถานะออเดอร์</Text>
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
                        <Text style={styles.ValueTextRight}>กำลังปรุงอาหาร</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>153</Text>
                        <Text style={styles.ValueTextCenter}>12:06</Text>
                        <Text style={styles.ValueTextCenter}>ไก่ทอดหาดเล็ด</Text>
                        <Text style={styles.ValueTextRight}>รับออเดอร์</Text>
                    </View>

                </View>

            </ScrollView>

        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { marginTop: 50, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    StatusHeaderText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 20 : 22 },

    StatusHeaderContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 40 },
    HeaderTextCenter: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 50 },

    StatusValueContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 40, color: '#888888' },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#888888', alignItems: 'center' },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 30, color: '#000' }

});


export default FoodStatus