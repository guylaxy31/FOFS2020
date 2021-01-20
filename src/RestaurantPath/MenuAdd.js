import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, TextInput, Modal } from 'react-native';
import { Icon } from 'react-native-elements'

import DropDownPicker from 'react-native-dropdown-picker';

const MenuAdd = props => {



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>


                <View><Text style={styles.MenuTitleText}>ชื่อเมนู</Text></View>
                <View><TextInput style={styles.TextInputVal}></TextInput></View>

                <View><Text style={styles.MenuTitleText}>ประเภทอาหาร</Text></View>
                <View style={styles.DropDownContainer}>
                    <DropDownPicker
                        items={[
                            { label: 'อาหาตามสั่ง', value: 'madeinorder' },
                            { label: 'เมนูเส้น', value: 'noodle' },
                            { label: 'เครื่องดื่ม', value: 'drinks' },
                            { label: 'ขนม', value: 'sweets' }
                        ]}
                        defaultIndex={0}
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => console.log(item.label, item.value)}
                        labelStyle={{ fontSize: 14, fontFamily: 'pr-reg', color: '#000', backgroundColor: '#FFF', textAlign: 'center' }}
                        placeholder="เลือกประเภทอาหาร"
                        placeholderStyle={{ fontFamily: 'pr-reg', color: '#A09E8C', textAlign: 'center', fontSize: 14 }}
                        dropDownStyle={{ backgroundColor: '#FFF', textAlign: 'center' }}
                        activeLabelStyle={{ backgroundColor: '#DDDDD6', width: '100%', textAlign: 'center', borderRadius: 15 }}

                    />
                </View>

                <View><Text style={styles.MenuTitleText}>ราคา (บาท)</Text></View>
                <View><TextInput style={styles.TextInputValPrices}></TextInput></View>

                <View><Text style={styles.MenuTitleText}>กรณีมีปริมาณพิเศษ</Text></View>
                <View style={styles.ValueTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='add' color='#7A7A7A' /></View></TouchableOpacity></View>

                <View><Text style={styles.MenuTitleText}>วัตถุดิบที่ลูกค้าสามารถเลือก</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                    <View><Text style={styles.ingreTitleText}>หมู</Text></View>
                    <View><Text style={styles.ingrePricesText}>+0 ฿</Text></View>

                    <View style={styles.EditTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='edit' /></View></TouchableOpacity></View>
                    <View style={styles.DeleteTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='delete' /></View></TouchableOpacity></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                    <View><Text style={styles.ingreTitleText}>ไก่</Text></View>
                    <View><Text style={styles.ingrePricesText}>+0 ฿</Text></View>

                    <View style={styles.EditTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='edit' /></View></TouchableOpacity></View>
                    <View style={styles.DeleteTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='delete' /></View></TouchableOpacity></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                    <View><Text style={styles.ingreTitleText}>กุ้ง</Text></View>
                    <View><Text style={styles.ingrePricesText}>+5 ฿</Text></View>

                    <View style={styles.EditTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='edit' /></View></TouchableOpacity></View>
                    <View style={styles.DeleteTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='delete' /></View></TouchableOpacity></View>
                </View>


                <View style={styles.AddTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='add' color='#7A7A7A' /></View></TouchableOpacity></View>


                <View><Text style={styles.MenuTitleText}>ท็อปปิ้ง</Text></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                    <View><Text style={styles.ingreTitleText}>ไข่เขียว</Text></View>
                    <View><Text style={styles.ingrePricesText}>+10 ฿</Text></View>

                    <View style={styles.EditTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='edit' /></View></TouchableOpacity></View>
                    <View style={styles.DeleteTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='delete' /></View></TouchableOpacity></View>
                </View>
                <View style={styles.AddTouchContainer}><TouchableOpacity style={styles.ValueTouchBox}><View><Icon name='add' color='#7A7A7A' /></View></TouchableOpacity></View>


                <View><Text style={styles.MenuTitleText}>รายละเอียดเพิ่มเติม (อาหาร)</Text></View>
                <View><TextInput style={styles.TextInputValDesc}></TextInput></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 50 }}>
                    <View style={styles.submitBtn}><TouchableOpacity onPress={() => props.navigation.navigate('MenuList')}><Text style={styles.submitBtnText}>ยืนยัน</Text></TouchableOpacity></View>
                    <View style={styles.cancelBtn}><TouchableOpacity><Text style={styles.CancelBtnText}>ยกเลิก</Text></TouchableOpacity></View>
                </View>

                {/* แสดงเมื่อกดปุ่มลบ แก้ไข */}

                {/* แสดงเมื่อกดปุ่มลบ ถังขยะ */}
                <Modal transparent={true} visible={false}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>

                            <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'center' }}><Text style={styles.CancelText}>คุณแน่ใจว่าต้องการลบวัตถุดิบนี้</Text></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={styles.TouchSubmitButton}><TouchableOpacity><Text style={styles.SubmitButtonTxt}>ยืนยัน</Text></TouchableOpacity></View>
                                <View style={styles.TouchCloseButton}><TouchableOpacity><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity></View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* แสดงเมื่อกดปุ่มลบ เพิ่ม */}

            </ScrollView>

        </View >
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    MenuTitleText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginBottom: 10, marginTop: 20 },
    TextInputVal: { color: '#767676', backgroundColor: '#FFFFE3', borderRadius: 15, width: 250, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, padding: 10 },
    TextInputValPrices: { color: '#767676', backgroundColor: '#FFFFE3', borderRadius: 15, width: 100, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, padding: 10 },
    TextInputValDesc: { color: '#767676', backgroundColor: '#FFFFE3', borderRadius: 15, width: 300, height: 100, fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, padding: 10 },

    DropDownContainer: { zIndex: 1, width: Dimensions.get('window').width * .5, height: Dimensions.get('window').height * .08, marginVertical: 5, backgroundColor: '#FFF' },

    ValueTouchContainer: { width: 40, backgroundColor: '#EBEBEB', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, marginHorizontal: 5, borderRadius: 15 },
    ValueTouchBox: { padding: 5, },
    ingreTitleText: { fontFamily: 'pr-reg', color: '#757575', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 10 },
    ingrePricesText: { fontFamily: 'pr-reg', color: '#757575', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginLeft: 30 },
    EditTouchContainer: { width: 50, backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, borderRadius: 15, marginLeft: 'auto', marginRight: 16 },
    DeleteTouchContainer: { width: 50, backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, borderRadius: 15 },

    AddTouchContainer: { width: 40, backgroundColor: '#EBEBEB', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, marginHorizontal: 5, borderRadius: 15, marginBottom: 20 },

    submitBtn: { width: 100, marginLeft: 50, backgroundColor: '#FFFC1B', padding: 10, width: 100, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, borderRadius: 15 },
    submitBtnText: { textAlign: 'center', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 18, textAlign: 'center' },
    cancelBtn: { width: 80, marginRight: 50, backgroundColor: '#FFF', padding: 10, borderRadius: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    CancelBtnText: { textAlign: 'center', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },

    ModalContainer: { alignSelf: 'center', backgroundColor: '#fff', width: 350, padding: 40, borderRadius: 15, justifyContent: 'center', height: 220, marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    CancelText: { textAlign: 'center', fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },
    TouchBackButton: { borderRadius: 15, marginTop: 10, padding: 10, width: 80, alignSelf: 'center' },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },

    TouchSubmitButton: { backgroundColor: '#FFFC1B', borderRadius: 15, marginTop: 10, padding: 10, width: 100, alignSelf: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    SubmitButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    TouchCloseButton: { backgroundColor: '#FFF', borderRadius: 15, marginTop: 10, padding: 10, width: 80, alignSelf: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 }
});


export default MenuAdd