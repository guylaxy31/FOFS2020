import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


const FoodHistory = props => {

    return (

        <View style={styles.container}>

            <ScrollView style={{ width: '100%' }}>

                <View style={styles.CardContainer}>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.StatusHeaderText}>ประวัติการสั่งออเดอร์</Text>
                    </View>
                    <View style={styles.StatusHeaderContainer}>
                        <Text style={styles.HeaderTextLeft}>#</Text>
                        <Text style={styles.HeaderTextCenter}>วันที่</Text>
                        <Text style={styles.HeaderTextCenter}>ร้านอาหาร</Text>
                        <Text style={styles.HeaderTextRight}>รายการ</Text>
                    </View>
                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>152</Text>
                        <Text style={styles.ValueTextCenter}>23 ม.ค. 64</Text>
                        <Text style={styles.ValueTextCenter}>กับข้าวปาณี</Text>
                        <TouchableOpacity style={styles.TouchDetailBtn}><Text style={styles.ValueTextRightBtn}>ดูรายละเอียด</Text></TouchableOpacity>
                    </View>

                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>164</Text>
                        <Text style={styles.ValueTextCenter}>26 ม.ค. 64</Text>
                        <Text style={styles.ValueTextCenter}>ป้าฟรุ๊ตตี้</Text>
                        <TouchableOpacity style={styles.TouchDetailBtn}><Text style={styles.ValueTextRightBtn}>ดูรายละเอียด</Text></TouchableOpacity>
                    </View>

                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>170</Text>
                        <Text style={styles.ValueTextCenter}>26 ม.ค. 64</Text>
                        <Text style={styles.ValueTextCenter}>ป้าฟรุ๊ตตี้</Text>
                        <TouchableOpacity style={styles.TouchDetailBtn}><Text style={styles.ValueTextRightBtn}>ดูรายละเอียด</Text></TouchableOpacity>
                    </View>

                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>172</Text>
                        <Text style={styles.ValueTextCenter}>28 ม.ค. 64</Text>
                        <Text style={styles.ValueTextCenter}>ไก่ทอดหาดเล็ก</Text>
                        <TouchableOpacity style={styles.TouchDetailBtn}><Text style={styles.ValueTextRightBtn}>ดูรายละเอียด</Text></TouchableOpacity>
                    </View>

                    <View style={styles.StatusValueContainer}>
                        <Text style={styles.ValueTextLeft}>198</Text>
                        <Text style={styles.ValueTextCenter}>29 ม.ค. 64</Text>
                        <Text style={styles.ValueTextCenter}>น้ำแข็งใสใบบัว</Text>
                        <TouchableOpacity style={styles.TouchDetailBtn}><Text style={styles.ValueTextRightBtn}>ดูรายละเอียด</Text></TouchableOpacity>
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
    HeaderTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 20 },
    HeaderTextCenter: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    HeaderTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 50 },

    StatusValueContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    ValueTextLeft: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#888888', marginLeft: 20, alignItems: 'center', marginTop: 5 },
    ValueTextCenter: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#888888', alignItems: 'center', marginTop: 5 },
    ValueTextRight: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#888888', marginRight: 30, alignItems: 'center', marginTop: 5 },
    ValueTextRightBtn: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#000' },
    TouchDetailBtn: { borderRadius: 15, backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, marginRight: 30, paddingHorizontal: 10, paddingVertical: 5 }
});


export default FoodHistory