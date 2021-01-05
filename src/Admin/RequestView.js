import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';


const RequestView = props => {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.ScrollContainer} horizontal={false}>
                <View style={styles.CardContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ borderRadius: 15, marginBottom: 15 }}>
                        {/* กรณีมีหลายรูป ให้ก็อป Tag View ImgContainer ต่อ 1 รูป */}
                        <View style={styles.ImgContainer}>
                            <Image
                                style={styles.ImgTag}
                                source={require('../../assets/restaurantlist/rest011182.jpg')}
                            />
                        </View>

                        <View style={styles.ImgContainer}>
                            <Image
                                style={styles.ImgTag}
                                source={require('../../assets/restaurantlist/rest011182.jpg')}
                            />
                        </View>

                    </ScrollView>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>ชื่อร้าน</Text>
                        <Text style={styles.RestTxtLight}>ร้านอาหาร1</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>ผู้ประกอบการ</Text>
                        <Text style={styles.RestTxtLight}>นายกอ ขายดี</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>ที่ตั้งร้าน</Text>
                        <Text style={styles.RestLocationTxt}>xxx/xx ซ.99 ม.99 อ. ขายดี จังหวัดเชียงใหม่ 50200</Text>
                    </View>
                    <Text style={styles.ContactTxt}>ช่องทางติดต่อ</Text>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>เบอร์โทรศัพท์</Text>
                        <Text style={styles.RestTxtLight}>099-9999999</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>ไลน์</Text>
                        <Text style={styles.RestTxtLight}>rest1.line</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>อีเมล</Text>
                        <Text style={styles.RestTxtLight}>-</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>เฟสบุ๊ค</Text>
                        <Text style={styles.RestTxtLight}>restaurant1 delicious</Text>
                    </View>
                    <View style={styles.RestTitleRow}>
                        <Text style={styles.RestTxtBold}>เว็ปไซต์</Text>
                        <Text style={styles.RestTxtLight}>restaurant1@website.com</Text>
                    </View>

                    <View style={styles.commentContainer}>
                        <Text style={styles.commentTitleTxt}>ตอบกลับร้านอาหาร (ถ้ามี)</Text>
                        <TextInput style={styles.CommentInputArea}  ></TextInput>
                    </View>

                    <View style={styles.btnAlign}>
                        <TouchableOpacity>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>อนุมัติ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.btn2}>
                                <Text style={styles.btnText2}>ไม่ผ่านการอนุมัติ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('AdminRestaurantRequestscreen')}>
                            <View style={styles.btn3}>
                                <Text style={styles.btnText3}>กลับ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },

    ScrollContainer: { width: Dimensions.get('window').width, backgroundColor: '#FFF' },
    CardContainer: { margin: 20, padding: 10, borderRadius: 15, elevation: 3, backgroundColor: '#FFF', shadowOffset: { width: 1, height: 1 }, shadowColor: '#333', shadowOpacity: .3, shadowRadius: 2 },

    ImgContainer: { flex: 1, width: Dimensions.get('window').width * .75, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderRadius: 15, borderColor: '#E7E7DB', padding: 1, marginRight: 3 },
    ImgTag: { flex: 1, width: Dimensions.get('window').width * .5, height: Dimensions.get('window').height * .25, borderRadius: 15 },

    RestTitleRow: { marginHorizontal: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start' },
    RestTxtBold: { fontFamily: 'pr-reg', fontSize: 16, marginRight: 5, marginVertical: 5, color: '#969565' },
    RestTxtLight: { flex: 1, fontFamily: 'pr-reg', fontSize: 16, marginVertical: 5, color: '#4F4F4F' },
    RestLocationTxt: { flex: 1, fontFamily: 'pr-reg', fontSize: 16, marginVertical: 5, color: '#4F4F4F' },
    ContactTxt: { fontFamily: 'pr-bold', fontSize: 16, marginBottom: 10, marginVertical: 15 },
    commentContainer: { flex: 1, marginTop: 15, marginHorizontal: 20 },
    CommentInputArea: { borderRadius: 15, borderColor: '#000', borderWidth: 1, minHeight: Dimensions.get('window').height * .125, padding: 10, marginVertical: 10 },
    commentTitleTxt: { fontFamily: 'pr-reg' },

    btnAlign: { flex: 1, flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
    btn: { minWidth: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFFC1B', borderRadius: 15, justifyContent: 'center', padding: 5, marginHorizontal: 8 },
    btnText: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: 14 },
    btn2: { minWidth: Dimensions.get('window').width * 0.3, height: Dimensions.get('window').height * 0.045, backgroundColor: 'red', borderRadius: 15, justifyContent: 'center', padding: 5, marginHorizontal: 8 },
    btnText2: { textAlign: 'center', color: '#FFF', fontFamily: 'pr-reg', fontSize: 14 },
    btn3: { width: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFF', borderRadius: 15, justifyContent: 'center', padding: 5, marginHorizontal: 8 },
    btnText3: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: 14 },
});


export default RequestView