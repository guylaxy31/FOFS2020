import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity, Dimensions, Image } from 'react-native';

import HextagonIcon from '../Themes/HextagonIcon';
import { connect } from 'react-redux'

const RegisterForCustomer = props => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
                <View style={styles.FormContainerWrap}>
                    <View style={styles.RegisterTitle}><HextagonIcon /><Text style={styles.TitleText}>สร้างบัญชีใหม่</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อผู้ใช้</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>รหัสผ่าน</Text></View>
                    <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.FillFormText}></TextInput></View>
                    {/* Tag Text ชาย กับ หญิงจะไม่โผล่พร้อมกับ จะขึ้นตามที่เลือก 1 อัน */}
                    <View style={styles.FormContainerGenderTitle}><Text style={styles.FormFillTitleGen}>เพศ : </Text>{props.gender.GenderState === 0 ? <Text style={styles.genderTxt}>โปรดเลือก</Text> : (props.gender.GenderState === 1 ? <Text style={styles.genderTxt}>ชาย</Text> : <Text style={styles.genderTxt}>หญิง</Text>)}</View>
                    <View style={styles.GenderContainer}>
                        <TouchableOpacity onPress={() => props.SetMaleGender()}><Image style={styles.genderBtn} source={require('../../assets/register/MaleBtn.png')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => props.SetFemaleGender()}><Image style={styles.genderBtn} source={require('../../assets/register/FemaleBtn.png')}></Image></TouchableOpacity>
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
                    <View style={styles.FormContainer, { marginBottom: 60 }}><TextInput style={styles.FillFormText}></TextInput></View>
                    <TouchableOpacity onPress={() => props.ShowConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>

                    <TouchableOpacity style={{ marginBottom: 50 }} onPress={() => props.navigation.navigate('CustomerFoodID')}><Text style={styles.submitButton}>ยืนยัน</Text></TouchableOpacity>
                </View>
                <Modal transparent={true} visible={props.consense.ConsenseState}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>  ผู้ลงทะเบียนรับทราบยินยอมให้ผู้พัฒนานำข้อมูลทางสถิติไปใช้วิเคราะห์ในอนาคตได้</Text></View>
                            <View style={{ flexDirection: 'row', marginBottom: 50 }}><Text style={styles.consenseText}>  ผู้พัฒนาจะไม่เผยแพร่ข้อมูลส่วนบุคคลในการระบุตัวตนของผู้ใช้งานได้ (พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)</Text></View>
                            <TouchableOpacity onPress={() => props.CloseConsense()} style={styles.TouchBackButton}><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity>
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
    TitleText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginLeft: 5, marginVertical: 20 },

    FormContainer: { width: '100%', marginVertical: 6 },
    FormContainerGenderTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#CCC' },

    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 300, paddingVertical: 5, paddingHorizontal: 20, height: Dimensions.get('window').height * .063, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    FormFillTitleGen: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 5 },

    ModalContainer: { backgroundColor: '#fff', margin: 30, padding: 40, borderRadius: 15, justifyContent: 'center', height: Dimensions.get('window').height > Dimensions.get('window').width ? '50%' : '60%', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },
    TouchBackButton: { backgroundColor: '#EBEBEB', borderRadius: 15, marginTop: 10, paddingVertical: '3%', width: '50%', alignSelf: 'center' },
    closeButtonTxt: { fontFamily: 'pr-reg', textAlign: 'center', fontSize: Dimensions.get('window').height * .023 },

    submitButton: { textAlign: 'center', fontFamily: 'pr-reg', backgroundColor: 'red', width: 120, padding: 10, backgroundColor: '#FFFC1B', color: '#000', alignSelf: 'center', borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    TouchReadButton: { marginBottom: 50 },
    readforSubmit: { fontFamily: 'pr-bold', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20 },

});

const mapStatetoProps = (state) => {
    return {
        consense: state.consense,
        gender: state.gender
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        ShowConsense: () => {
            dispatch({
                type: "SHOW_CONSENSE",
            })
        },
        CloseConsense: () => {
            dispatch({
                type: "CLOSE_CONSENSE",
            })
        },
        SetMaleGender: () => {
            dispatch({
                type: "SET_MALE_GENDER",
            })
        },
        SetFemaleGender: () => {
            dispatch({
                type: "SET_FEMALE_GENDER",
            })
        },

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterForCustomer);