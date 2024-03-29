import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ListCheck = props => {

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

                    <View style={styles.StatusTxtContainer}><Text style={styles.StatusRestTxtBold}>สถานะของร้าน</Text>
                        {/* เหลือแต่สร้าง Condition Render ระหว่าง Text 3 บรรทัดนี้ */}
                        <Text style={styles.StatusRestTxtLightSuccess}>อนุมัติให้ใช้งาน</Text>
                        <Text style={styles.StatusRestTxtLightWait}>อยู่ระหว่างการตรวจสอบ</Text>
                        <Text style={styles.StatusRestTxtLightDanger}>ระงับการใช้งาน</Text>
                    </View>

                    <View style={styles.DropDownContainer}>
                        <DropDownPicker
                            items={[
                                { label: 'อนุมัติให้ใช้งาน', value: 'authorized' },
                                { label: 'อยู่ระหว่างการตรวจสอบ', value: 'waiting' },
                                { label: 'ระงับการใช้งาน', value: 'cancel' }
                            ]}
                            defaultIndex={0}
                            containerStyle={{ height: 40 }}
                            onChangeItem={item => console.log(item.label, item.value)}
                            labelStyle={{ fontSize: Dimensions.get('window').height * .022, fontFamily: 'pr-reg', color: '#000', backgroundColor: '#FFF', textAlign: 'center' }}
                            placeholder="แก้ไขสถานะของร้าน"
                            placeholderStyle={{ fontFamily: 'pr-reg', color: '#A09E8C', textAlign: 'center', fontSize: Dimensions.get('window').height * .022 }}
                            dropDownStyle={{ backgroundColor: '#FFF', textAlign: 'center' }}
                            activeLabelStyle={{ backgroundColor: '#DDDDD6', width: '100%', textAlign: 'center', borderRadius: 15 }}

                        />
                    </View>

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
                    {/* 
                    <View style={styles.btnMessageContainer}>
                        <TouchableOpacity style={styles.btnTouchTxt}>
                            <Text style={styles.btnMessageTxt}>ส่งข้อความ</Text>
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.btnAlign}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AdminRestaurantListscreen')}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>บันทึก</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('AdminRestaurantListscreen')}>
                            <View style={styles.btn3}>
                                <Text style={styles.btnText3}>ย้อนกลับ</Text>
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

    StatusTxtContainer: { flex: 1, flexDirection: 'row', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .0225, marginVertical: 5, color: '#4F4F4F', alignItems: 'center' },
    StatusRestTxtBold: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height * .0225, marginRight: 5 },
    StatusRestTxtLightSuccess: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .020, color: '#FFF', backgroundColor: '#00B512', padding: 5, borderRadius: 15 },
    StatusRestTxtLightWait: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .020, color: '#000', backgroundColor: '#E1E0D0', padding: 5, borderRadius: 15 },
    StatusRestTxtLightDanger: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .020, color: '#FFF', backgroundColor: 'red', padding: 5, borderRadius: 15 },

    DropDownContainer: { zIndex: 1, width: Dimensions.get('window').width * .5, height: Dimensions.get('window').height * .08, marginVertical: 15, marginHorizontal: 20, backgroundColor: '#FFF' },

    RestTitleRow: { marginHorizontal: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start' },
    RestTxtBold: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .0225, marginRight: 5, marginVertical: 5, color: '#969565' },
    RestTxtLight: { flex: 1, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .0225, marginVertical: 5, color: '#4F4F4F' },
    RestLocationTxt: { flex: 1, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .0225, marginVertical: 5, color: '#4F4F4F' },
    ContactTxt: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height * .0225, marginBottom: 10, marginVertical: 15 },

    btnMessageContainer: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#DDDDD6', padding: 5, borderRadius: 15, marginVertical: 15, width: Dimensions.get('window').width * .25, alignSelf: 'center' },
    btnTouchTxt: { width: '100%' },
    btnMessageTxt: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .02, textAlign: 'center' },

    btnAlign: { flex: 1, flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
    btn: { minWidth: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFFC1B', borderRadius: 15, justifyContent: 'center', padding: 5, marginHorizontal: 8 },
    btnText: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .019 },
    btn3: { width: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.045, backgroundColor: '#FFF', borderRadius: 15, justifyContent: 'center', padding: 5, marginHorizontal: 8 },
    btnText3: { textAlign: 'center', color: '#000', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .0185 },
});


export default ListCheck