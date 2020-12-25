import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import HextagonIcon from '../MenuContent/HextagonIcon';
import { connect } from 'react-redux'

const RegisterRestaurantContainer = props => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                <View style={styles.FormContainerWrap}>
                    <View style={styles.RegisterTitle}><HextagonIcon /><Text style={styles.TitleText}>ส่งร้านอาหารเข้าร่วม</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อผู้ใช้</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>รหัสผ่าน</Text></View>
                    <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อจริง</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>นามสกุล</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เพศ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อายุ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เบอร์โทรศัพท์</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อีเมลล์</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>Facebook</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>Line</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อร้าน</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ที่ตั้งร้านอาหาร</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อำเภอ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>จังหวัด</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เว็ปไซต์ (ถ้ามี)</Text></View>
                    <View style={styles.FormContainer, { marginBottom: '20  %' }}><TextInput style={styles.FillFormText}></TextInput></View>
                    <TouchableOpacity onPress={() => props.showConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>
                    <View style={styles.CheckBoxContainer}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        /><Text style={styles.consenseText}>ได้อ่านและยิมยอมข้อตกลง</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantAppIDscreen')}><Text style={styles.submitButton}>ยืนยัน</Text></TouchableOpacity>
                </View>
                <Modal transparent={true} visible={props.consense.ConsenseState}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>ร้านอาหารรับรองว่าได้ตรวจสอบข้อมูลก่อนนำเสนอบนแอปพลิเคชัน</Text></View>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>อนุญาตให้มีการแสดงข้อมูลที่ระบุที่ตั้งของร้านอาหารได้</Text></View>
                            <View style={{ flexDirection: 'row', marginBottom: '10%' }}><Text style={styles.consenseText}>อนุญาตให้มีการแสดง QR Code ของบัญชีธนาคารในขั้นตอน payment (พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)</Text></View>
                            <TouchableOpacity onPress={() => props.hideConsense()} style={styles.TouchBackButton}><Text style={styles.closeButton}>ปิด</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        height: '100%', width: '100%', alignSelf: 'stretch',
        backgroundColor: '#FFF', alignItems: 'center', flex: 1,
        flexDirection: 'column'
    },
    RegisterTitle: {

        flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row'
    },
    TitleText: {

        fontFamily: 'pr-bold', fontSize: 20, marginLeft: 5,
        marginVertical: 20
    },
    FormContainer: {

        width: '100%', marginVertical: 6
    },
    FormFillTitle: {

        fontFamily: 'pr-reg', fontSize: 16
    },
    FillFormText: {

        backgroundColor: '#FFFFE3', width: 300, paddingVertical: 5,
        paddingHorizontal: 20
    },
    FormContainerWrap: {

        alignSelf: 'center'
    },
    consenseText: {

        fontFamily: 'pr-light', color: '#000', fontSize: 16,
        marginVertical: 5,
    },
    ModalContainer: {

        backgroundColor: '#fff', margin: 50, padding: 40,
        borderRadius: 15
    },
    ModelBackground: {

        backgroundColor: '#000000aa', flex: 1,

    },
    TouchBackButton: {

        backgroundColor: '#D4D4D4', borderRadius: 15, marginTop: 10,
        paddingVertical: '2%', width: '50%', alignSelf: 'center',
    },
    closeButton: {

        fontFamily: 'pr-reg', textAlign: 'center'
    },
    submitButton: {

        textAlign: 'center', fontFamily: 'pr-reg', backgroundColor: 'red',
        width: '30%', padding: '2%', borderRadius: 15,
        backgroundColor: '#FFFC1B', color: '#000', alignSelf: 'center'
    },
    TouchReadButton: {

        marginBottom: '5%'
    },
    readforSubmit: {

        fontFamily: 'pr-bold', textAlign: 'center', fontSize: 16
    },
    CheckBoxContainer: {

        flexDirection: 'row', justifyContent: 'center', marginBottom: '5%'
    }
});

const mapStatetoProps = (state) => {
    return {
        consense: state.consense
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        showConsense: () => {
            dispatch({
                type: "showConsense",
            })
        },
        hideConsense: () => {
            dispatch({
                type: "hideConsense",
            })
        },

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterRestaurantContainer);