import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, Image, TextInput } from 'react-native';


const FoodMenuConfirm = props => {


    return (

        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.CardContainer}>
                    <View style={styles.ConcluContainer}><Text style={styles.concluText}>สรุปรายการ</Text></View>
                    <View style={styles.ConcluContainer}><Text style={styles.MenuTitleText}>ข้าวผัด</Text></View>
                    <View style={styles.MenuListContainer}>
                        <Text style={styles.MenuCustomText}>ธรรมดา</Text>
                        <Text style={styles.PriceCustomText}>+ 30 ฿</Text>
                    </View>
                    <View style={styles.MenuListContainer}>
                        <Text style={styles.MenuCustomText}>หมู</Text>
                        <Text style={styles.PriceCustomText}>+ 0 ฿</Text>
                    </View>
                    <View style={styles.ETCContainer}><Text style={styles.ETCText}>ฝากถึงร้านเพิ่มเติม : </Text></View>
                    <View style={styles.CommentContainer}><Text style={styles.CommentText}>ไม่ใส่ผัก ใส่มะนาวเยอะ ๆ</Text></View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F8F8F8', paddingVertical: 10, marginTop: 50 }}>
                        <Text style={styles.detailTotalTextTitle}>รวมทั้งหมด</Text>
                        <Text style={styles.detailTotalPrice}>30 ฿</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={styles.btnSubmit}><Text style={styles.btnSubmitText}>สั่งอาหาร</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnCancel}><Text style={styles.btnCancelText}>ย้อนกลับ</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >

    );

}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
    CardContainer: { flexDirection: 'column', alignItems: 'center', alignSelf: 'center', margin: 20, width: 500 / Dimensions.get('window').width + 380, backgroundColor: "#FFF", shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 3, shadowOpacity: 0.26, paddingVertical: 50 },

    ConcluContainer: { width: '100%', paddingHorizontal: 30 },
    concluText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 20 : 22, marginBottom: 20 },

    MenuTitleText: { marginBottom: 5, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },

    MenuListContainer: { width: '100%', backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between' },
    MenuCustomText: { fontFamily: 'pr-reg', color: '#797979', marginLeft: 50, fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    PriceCustomText: { fontFamily: 'pr-reg', color: '#979797', marginRight: 80, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },

    ETCContainer: { width: '100%', paddingHorizontal: 50, marginBottom: 10, marginTop: 10 },
    ETCText: { fontFamily: 'pr-reg', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    CommentContainer: { width: '100%', paddingHorizontal: 80 },
    CommentText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#636363' },

    detailTotalTextTitle: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000' },
    detailTotalPrice: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#000' },

    btnSubmit: { backgroundColor: '#FFFC1B', padding: 8, borderRadius: 15, marginRight: 20 },
    btnSubmitText: { fontFamily: 'pr-reg', paddingHorizontal: 10 },

    btnCancel: { backgroundColor: '#FFF', padding: 8, borderRadius: 15, marginLeft: 20 },
    btnCancelText: { fontFamily: 'pr-reg' }
});


export default FoodMenuConfirm