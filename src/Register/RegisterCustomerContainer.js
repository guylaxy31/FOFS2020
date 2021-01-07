import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity, Dimensions, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import HextagonIcon from '../MenuContent/HextagonIcon';
import { connect } from 'react-redux'

const RegisterCustomerContainer = props => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                <View style={styles.FormContainerWrap}>
                    <View style={styles.RegisterTitle}><HextagonIcon /><Text style={styles.TitleText}>สร้างบัญชีใหม่</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อผู้ใช้</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>รหัสผ่าน</Text></View>
                    <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.FillFormText}></TextInput></View>
                    {/* Tag Text ชาย กับ หญิงจะไม่โผล่พร้อมกับ จะขึ้นตามที่เลือก 1 อัน */}
                    <View style={styles.FormContainerGenderTitle}><Text style={styles.FormFillTitleGen}>เพศ : </Text><Text style={styles.genderTxt}>ชาย</Text><Text style={styles.genderTxt}>หญิง</Text></View>
                    <View style={styles.GenderContainer}>
                        <TouchableOpacity><Image style={styles.genderBtn} source={require('../../assets/register/MaleBtn.png')}></Image></TouchableOpacity>
                        <TouchableOpacity><Image style={styles.genderBtn} source={require('../../assets/register/FemaleBtn.png')}></Image></TouchableOpacity>
                    </View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อายุ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>สถานภาพ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>หน่วยงาน/สังกัด/คณะ</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เบอร์โทรศัพท์</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อีเมลล์</Text></View>
                    <View style={styles.FormContainer, { marginBottom: '20  %' }}><TextInput style={styles.FillFormText}></TextInput></View>
                    <TouchableOpacity onPress={() => props.showConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>
                    <View style={styles.CheckBoxContainer}>
                        {/* <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        /><Text style={styles.consenseText}>ได้อ่านและยิมยอมข้อตกลง</Text> */}
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CustomerFoodIDscreen')}><Text style={styles.submitButton}>ยืนยัน</Text></TouchableOpacity>
                </View>
                <Modal transparent={true} visible={props.consense.ConsenseState}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>   ผู้ลงทะเบียนรับทราบยินยอมให้ผู้พัฒนานำข้อมูลทางสถิติไปใช้วิเคราะห์ในอนาคตได้</Text></View>
                            <View style={{ flexDirection: 'row', marginBottom: '10%' }}><Text style={styles.consenseText}>  ผู้พัฒนาจะไม่เผยแพร่ข้อมูลส่วนบุคคลในการระบุตัวตนของผู้ใช้งานได้ (พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)</Text></View>
                            <TouchableOpacity onPress={() => props.hideConsense()} style={styles.TouchBackButton}><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },
    FormContainerWrap: { alignSelf: 'center' },

    RegisterTitle: { flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' },
    TitleText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height * .028, marginLeft: 5, marginVertical: 20 },

    FormContainer: { width: '100%', marginVertical: 6 },
    FormContainerGenderTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height * .023, color: '#CCC' },

    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .024 },
    FillFormText: { backgroundColor: '#FFFFE3', width: 300, paddingVertical: 5, paddingHorizontal: 20, fontSize: Dimensions.get('window').height * .023, height: Dimensions.get('window').height * .063, borderRadius: 15 },
    FormFillTitleGen: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height * .024, marginRight: 5 },

    ModalContainer: { backgroundColor: '#fff', margin: 50, padding: 40, borderRadius: 15 },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1, },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height * .023, marginVertical: 10 },
    TouchBackButton: { backgroundColor: '#EBEBEB', borderRadius: 15, marginTop: 10, paddingVertical: '3%', width: '50%', alignSelf: 'center' },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height * .023 },

    submitButton: { textAlign: 'center', fontFamily: 'pr-reg', backgroundColor: 'red', width: '30%', padding: '2%', backgroundColor: '#FFFC1B', color: '#000', alignSelf: 'center', borderRadius: 15 },
    TouchReadButton: { marginBottom: '5%' },
    readforSubmit: { fontFamily: 'pr-bold', textAlign: 'center', fontSize: Dimensions.get('window').height * .025 },
    CheckBoxContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: '5%' }
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

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterCustomerContainer);