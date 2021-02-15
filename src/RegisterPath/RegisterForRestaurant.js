import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Modal, Alert, Button } from 'react-native';
import Slider from '@react-native-community/slider';

import ThumbSlider from '../../assets/register/ThumbSlider.png'
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const RegisterForRestaurant = props => {


    const [user, setUser] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        gender: '',
        age: '20',
        phonenumber: '',
        email: '',
        line: '',

        isValidUsername: false,
        isValidPassword: false,
        isValidFirstname: false,
        isValidPhonenumber: false,
    })

    const [restaurant, setRestaurant] = useState({
        restaurantName: '',
        address: '',
        subdistrict: '',
        amphoe: '',
        province: '',
        postalcode: '',
        website: '',
        isValidRestaurantname: false,
        isValidAddress: false,
        isValidSubdistrict: false,
        isValidAmphoe: false,
        isValidProvince: false,
        isValidPostalcode: false
    })


    const checkUsername = () => { if (user.username.trim().length >= 4 & user.username.trim().length <= 16) { setUser({ ...user, isValidUsername: true }) } else { setUser({ ...user, isValidUsername: false }) } }
    const checkPassword = () => { if (user.password.trim().length >= 6 & user.password.trim().length <= 16) { setUser({ ...user, isValidPassword: true }) } else { setUser({ ...user, isValidPassword: false }) } }
    const checkFirstname = () => { if (user.firstname.trim().length >= 1 & user.firstname.trim().length <= 16) { setUser({ ...user, isValidFirstname: true }) } else { setUser({ ...user, isValidFirstname: false }) } }
    const checkPhonenumber = () => { if (user.phonenumber.trim().length === 9 || user.phonenumber.trim().length === 10) { setUser({ ...user, isValidPhoneNumber: true }) } else { setUser({ ...user, isValidPhoneNumber: false }) } }
    const checkEmail = () => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        if (expression.test(String(user.email).toLowerCase())) {
            setUser({ ...user, isValidEmail: true })
        } else { setUser({ ...user, isValidEmail: false }) }
    }

    const [conSenseState, setConsenseState] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [authSubmit, setAuthSubmit] = useState(false);
    const [page1, setPage1] = useState({ isValid: false, errors: false });

    const openConsense = () => { setConsenseState(true) }
    const closeConsense = () => { setConsenseState(false) }
    const togcheckbox = (bool) => {
        setToggleCheckBox(bool)
        setAuthSubmit(bool)
    }

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        });
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };



    return (

        <View style={styles.container}>
            <ProgressSteps activeStepIconBorderColor='#888765' completedProgressBarColor='#FFFC1B' activeStepIconColor='#FFFC1B' completedStepIconColor='#FFFC1B' labelFontFamily='pr-light' activeLabelColor='#000' completedCheckColor='#000'>
                <ProgressStep label="บัญชี" nextBtnText='ถัดไป' nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name="person-circle-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดชื่อผู้ใช้</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, username: val })} onEndEditing={checkUsername} style={styles.FillFormText}></TextInput>
                        {user.isValidUsername ? null : <View><Text style={styles.validText}>*ระบุ 4 - 16 ตัวอักษร</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name="lock-closed-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดรหัสผ่าน</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, password: val })} onEndEditing={checkPassword} style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                        {user.isValidPassword ? null : <View><Text style={styles.validText}>*ระบุ 6 - 16 ตัวอักษร</Text></View>}
                    </View>

                </ProgressStep>
                <ProgressStep label="ข้อมูลผู้ใช้" nextBtnText='ถัดไป' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ชื่อจริง</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, firstname: val })} onEndEditing={checkFirstname} style={styles.FillFormText}></TextInput>
                        {user.isvalidUsername ? null : <View><Text style={styles.validText}>*ระบุไม่เกิน 16 ตัวอักษร</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>นามสกุล</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, lastname: val })} style={styles.FillFormText} style={styles.FillFormText}></TextInput>

                        <View style={styles.FormContainerGenderTitle}><Text style={styles.FormFillTitleGen}>เพศ : </Text>{user.gender === '' ? <Text style={styles.genderTxt}>โปรดเลือก</Text> : (user.gender === 'male' ? <Text style={styles.genderTxt}>ชาย</Text> : <Text style={styles.genderTxt}>หญิง</Text>)}</View>
                        <View style={styles.GenderContainer}>
                            <TouchableOpacity onPress={() => setUser({ ...user, gender: 'male' })}><Image style={styles.genderBtn} source={require('../../assets/register/MaleBtn.png')}></Image></TouchableOpacity>
                            <TouchableOpacity onPress={() => setUser({ ...user, gender: 'female' })}><Image style={styles.genderBtn} source={require('../../assets/register/FemaleBtn.png')}></Image></TouchableOpacity>
                        </View>
                        <View style={styles.FormContainerAgeTitle}><Text style={styles.FormFillTitle}>อายุ : </Text><Text style={styles.AgeText}>{user.age}</Text></View>
                        <Slider
                            style={{ width: 200, height: 50 }}
                            minimumValue={20}
                            maximumValue={65}
                            thumbImage={ThumbSlider}
                            minimumTrackTintColor="#000"
                            maximumTrackTintColor="#616000"
                            onValueChange={(val) => setUser({ ...user, age: val })}
                            step={1}
                            thumbTintColor="#FFFC1B"

                        />
                    </View>


                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>เบอร์ติดต่อ</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, phonenumber: val })} onEndEditing={checkPhonenumber} style={styles.FillFormText} keyboardType='numeric' style={styles.FillFormText}></TextInput>
                        {user.isValidPhonenumber ? null : <View><Text style={styles.validText}>*ระบุเบอร์ให้ถูกต้อง</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อีเมล</Text></View>
                        <TextInput onChangeText={(val) => setUser({ ...user, email: val })} onEndEditing={checkEmail} style={styles.FillFormText} style={styles.FillFormText}></TextInput>
                        {user.isValidEmail ? null : <View><Text style={styles.validText}>*ระบุอีเมลให้ถูกต้อง</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ไลน์</Text></View>
                        <TextInput style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                    </View>

                </ProgressStep>
                <ProgressStep label="ข้อมูลร้าน" finishBtnText='ยืนยัน' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.FormContainer}>

                            <TouchableOpacity onPress={pickImage} style={styles.addIMGBox}>
                                <View style={{ alignItems: 'center' }}>

                                    <Text style={{ fontFamily: 'pr-reg' }}>+ เพิ่ม/แก้ไขรูป</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.FormContainer}>
                            {image && <View style={{ flexDirection: 'row', marginLeft: 40 }}><Image source={{ uri: image }} style={{ width: 150, height: 150 }} /></View>}
                        </View>

                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.FormFillTitle}>ชื่อร้านอาหาร</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidRestaurantname ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name='location-outline' size={24} style={{ marginRight: 5 }}></Ionicons><Text style={styles.FormFillTitle}>ที่อยู่ร้านอาหาร</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidRestaurantname ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ตำบล</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidSubdistrict ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อำเภอ</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidAmphoe ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>จังหวัด</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidProvince ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>รหัสไปรษณีย์</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isValidPostalcode ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>เว็บไซต์ของร้าน</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>

                        </View>

                        <TouchableOpacity onPress={() => openConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => togcheckbox(newValue)}
                            />
                            <Text style={styles.readedText}>ได้อ่านและยอมรับข้อตกลง</Text>
                        </View>

                        <Modal transparent={true} visible={conSenseState}>
                            <View style={styles.ModelBackground}>
                                <View style={styles.ModalContainer}>
                                    <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>ร้านค้ารับรองว่าได้ตรวจสอบข้อมูลก่อนนำเสนอบนแอปพลิเคชัน</Text></View>
                                    <View style={{ flexDirection: 'row' }}><Text style={styles.consenseText}>อนุญาตให้มีการแสดงข้อมูลที่ระบุที่ตั้งของร้านอาหารได้</Text></View>

                                    <View style={styles.CloseModalContainer}><TouchableOpacity style={{ width: '100%' }} onPress={() => closeConsense()}><Text style={styles.closeButtonTxt}>ปิด</Text></TouchableOpacity></View>

                                </View>
                            </View>
                        </Modal>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View >
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },

    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 220, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, marginTop: 10, marginBottom: 10 },
    FormContainer: { width: '100%', marginVertical: 20, marginLeft: 40 },
    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, alignSelf: 'center' },
    validText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 12 : 14, color: 'red', marginLeft: 10 },

    addIMGBox: { backgroundColor: '#ccc', justifyContent: 'center', width: 120, height: 40, borderRadius: 15, marginLeft: 60 },

    FormFillTitleGen: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 5 },
    FormContainerGenderTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#CCC' },
    FormContainerAgeTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    AgeFillInput: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 100, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    AgeText: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6B2B' },

    ModalContainer: { alignSelf: 'center', width: '80%', backgroundColor: '#fff', margin: 30, padding: 40, borderRadius: 15, justifyContent: 'center', height: Dimensions.get('window').height > Dimensions.get('window').width ? '50%' : '60%', marginTop: Dimensions.get('window').height > Dimensions.get('window').width ? '40%' : '10%' },
    ModelBackground: { backgroundColor: '#000000aa', flex: 1 },
    consenseText: { fontFamily: 'pr-light', color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginVertical: 10 },
    readedText: { fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },

    TouchReadButton: { marginBottom: 10 },
    readforSubmit: { fontFamily: 'pr-bold', textAlign: 'center', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20 },
    CloseModalContainer: { flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', borderRadius: 15, width: 100, backgroundColor: '#EBEBEB', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, marginVertical: 15 },
    closeButtonTxt: { textAlign: 'center', fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, padding: 10 },
});



export default RegisterForRestaurant;