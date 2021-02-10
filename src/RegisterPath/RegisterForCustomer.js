import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity, Dimensions, Image, } from 'react-native';
import Slider from '@react-native-community/slider';

import HextagonIcon from '../Themes/HextagonIcon';
import ThumbSlider from '../../assets/register/ThumbSlider.png'
import DropDownPicker from 'react-native-dropdown-picker';

const RegisterForCustomer = props => {

    const [genderState, setGenderState] = useState('null');
    const [conSenseState, setConsenseState] = useState(false);
    const [ageValue, setAgeValue] = useState(8);
    const [career, setCareer] = useState('');
    const [authSubmit, setAuthSubmit] = useState(false);

    const setMaleGender = () => {
        setGenderState('male')
    }

    const setFemaleGender = () => {
        setGenderState('female')
    }

    const openConsense = () => {
        setConsenseState(true)
    }

    const closeConsense = () => {
        setConsenseState(false)
    }

    const readedConsense = () => {
        setAuthSubmit(true)
    }

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
                    <View style={styles.FormContainerGenderTitle}><Text style={styles.FormFillTitleGen}>เพศ : </Text>{genderState === 'null' ? <Text style={styles.genderTxt}>โปรดเลือก</Text> : (genderState === 'male' ? <Text style={styles.genderTxt}>ชาย</Text> : <Text style={styles.genderTxt}>หญิง</Text>)}</View>
                    <View style={styles.GenderContainer}>
                        <TouchableOpacity onPress={() => setMaleGender()}><Image style={styles.genderBtn} source={require('../../assets/register/MaleBtn.png')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => setFemaleGender()}><Image style={styles.genderBtn} source={require('../../assets/register/FemaleBtn.png')}></Image></TouchableOpacity>
                    </View>
                    <View style={styles.FormContainerAgeTitle}><Text style={styles.FormFillTitle}>อายุ : </Text><Text style={styles.AgeText}>{ageValue}</Text></View>
                    <View style={styles.FormContainer}>
                        <Slider
                            style={{ width: 200, height: 50 }}
                            minimumValue={13}
                            maximumValue={65}
                            thumbImage={ThumbSlider}
                            minimumTrackTintColor="#000"
                            maximumTrackTintColor="#616000"
                            onValueChange={(value) => setAgeValue(value)}
                            step={1}
                            thumbTintColor="#FFFC1B"

                        />

                    </View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อาชีพ</Text></View>
                    <DropDownPicker
                        items={[
                            { label: 'นักเรียน/นักศึกษา', value: 'student' },
                            { label: 'ครู/อาจารย์', value: 'professor' },
                            { label: 'ฟรีแลนซ์', value: 'freelance' },
                            { label: 'รับราชการ', value: 'officer' },
                            { label: 'ค้าขาย', value: 'trade' },
                        ]}
                        defaultValue={career}
                        placeholder="โปรดระบุ"
                        containerStyle={{ height: 40, marginBottom: 16 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => setCareer(item.value)}
                        labelStyle={{
                            fontFamily: 'pr-reg',
                            color: '#000'
                        }}
                        selectedLabelStyle={{
                            color: '#000'
                        }}
                    />

                    {career == 'student' ?
                        <View>
                            <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>สาขา/คณะที่เรียน</Text></View>
                            <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                        </View>
                        :
                        null
                    }

                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เบอร์โทรศัพท์</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อีเมล</Text></View>
                    <View style={styles.FormContainer, { marginBottom: 60 }}><TextInput style={styles.FillFormText}></TextInput></View>
                    <TouchableOpacity onPress={() => openConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50 }}>
                        {authSubmit == true ?
                            <View style={styles.SubmitContainer}><TouchableOpacity onPress={() => props.navigation.navigate('Homescreen')}><Text style={styles.submitButton}>ยืนยัน</Text></TouchableOpacity></View>
                            :
                            <View style={styles.CantSubmitContainer}><Text style={styles.cantsubmitButton}>ยืนยัน</Text></View>
                        }
                        <View style={styles.CancelContainer}><TouchableOpacity><Text style={styles.CancelButtonText}>ยกเลิก</Text></TouchableOpacity></View>
                    </View>
                </View>
                <Modal transparent={true} visible={conSenseState}>
                    <View style={styles.ModelBackground}>
                        <View style={styles.ModalContainer}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}><Text style={styles.consenseText}>ผู้ลงทะเบียนรับทราบยินยอมให้ผู้พัฒนานำข้อมูลทางสถิติไปใช้วิเคราะห์ในอนาคตได้</Text></View>
                            <View style={{ flexDirection: 'row', marginBottom: 30, flexWrap: 'wrap' }}><Text style={styles.consenseText}>ผู้พัฒนาจะไม่เผยแพร่ข้อมูลส่วนบุคคลในการระบุตัวตนของผู้ใช้งานได้ (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562)</Text></View>
                            <View style={styles.CloseModalContainer}><TouchableOpacity style={{ width: '100%' }} onPress={() => closeConsense()}><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity></View>
                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },
    FormContainerWrap: { flexDirection: 'column', alignSelf: 'center' },

    RegisterTitle: { flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' },
    TitleText: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, marginLeft: 5, marginVertical: 20 },

    FormContainer: { width: '100%', marginVertical: 6 },
    FormContainerGenderTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6B2B' },

    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 220, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    FormContainerAgeTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    AgeFillInput: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 100, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    AgeText: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6B2B' },
    FormFillTitleGen: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 5 },

    ModalContainer: { alignSelf: 'center', width: '80%', backgroundColor: '#fff', margin: 30, padding: 40, borderRadius: 15, justifyContent: 'center', height: Dimensions.get('window').height > Dimensions.get('window').width ? '50%' : '60%', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },


    SubmitContainer: { width: 90, borderRadius: 15, backgroundColor: '#FFFC1B', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    CantSubmitContainer: { width: 90, borderRadius: 15, backgroundColor: '#ccc' },
    submitButton: { textAlign: 'center', fontFamily: 'pr-reg', padding: 10, color: '#000', alignSelf: 'center', borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    cantsubmitButton: { textAlign: 'center', fontFamily: 'pr-reg', padding: 10, color: '#FFF', alignSelf: 'center', borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    CancelContainer: { width: 80, borderRadius: 15, backgroundColor: '#FFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    CancelButtonText: { textAlign: 'center', fontFamily: 'pr-reg', padding: 10, backgroundColor: '#FFF', color: '#000', alignSelf: 'center', borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },


    TouchReadButton: { marginBottom: 50 },
    readforSubmit: { fontFamily: 'pr-bold', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20 },
    CloseModalContainer: { flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: 15, width: 100, backgroundColor: '#EBEBEB', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1 },
    closeButtonTxt: { textAlign: 'center', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, padding: 10 },

});



export default RegisterForCustomer