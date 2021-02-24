import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tutorial = props => {

    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={{ paddingHorizontal: 40, marginVertical: 15 }}>
                        <Text style={styles.titleH1Tutorial}>1 เข้าสู่ระบบ</Text>
                        <Text style={styles.detailTutorial}>ที่หน้าหลักมุมบนขวาของหน้าจอกดเข้าสู่ระบบเพื่อใช้งาน</Text>
                    </View>

                    <View style={{ paddingHorizontal: 40, marginVertical: 15 }}>
                        <Text style={styles.titleH1Tutorial}>2 เลือกเมนูอาหาร</Text>
                        <MaterialCommunityIcons name="food-fork-drink" size={80} color="black" style={{ marginVertical: 5 }} />
                        <Text style={styles.detailTutorial}>เลือกเมนูที่สนใจทำการเลือกสิ่งที่ต้องการ</Text>
                    </View>

                    <View style={{ paddingHorizontal: 40, marginVertical: 15 }}>
                        <Text style={styles.titleH1Tutorial}>3 ยืนยันรายการ</Text>
                        <Text style={styles.detailTutorial}>ทำการยืนยันอาหารที่ต้องการสั่ง</Text>
                    </View>

                    <View style={{ paddingHorizontal: 40, marginVertical: 15 }}>
                        <Text style={styles.titleH1Tutorial}>4 ตรวจสอบสถานะ</Text>
                        <Text style={styles.detailTutorial}>ตรวจสอบสถานะของรายการที่สั่งได้ที่แถบเมนูด้านล่าง"สถานะออเดอร์"</Text>
                    </View>

                    <View style={{ paddingHorizontal: 40, marginVertical: 15 }}>
                        <Text style={styles.titleH1Tutorial}>5 รับอาหาร</Text>
                        <Text style={styles.detailTutorial}>เมื่อสถานะการทำอาหารเสร็จแล้วสามารถไปรับอาหารและทำการชำระเงินที่หน้าร้านอาหาร</Text>
                    </View>

                </View>

            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50, borderRadius: 15 },

    titleH1Tutorial: { fontFamily: 'pr-bold', fontSize: 18 },
    detailTutorial: { fontFamily: 'pr-reg', fontSize: 16, color: '#A7A7A7' },
});


export default Tutorial