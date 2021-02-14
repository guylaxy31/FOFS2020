import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';

import ThumbSlider from '../../assets/register/ThumbSlider.png'
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Ionicons } from '@expo/vector-icons';

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

        isvalidUsername: false,
        isvalidPassword: false,
        isvalidFirstname: false,
        isvalidPhonenumber: false,
    })

    const [restaurant, setRestaurant] = useState({
        restaurantName: '',
        address: '',
        subdistrict: '',
        amphoe: '',
        province: '',
        postalcode: '',
        website: '',
        isvalidRestaurantname: false,
        isvalidAddress: false,
        isvalidSubdistrict: false,
        isvalidAmphoe: false,
        isvalidProvince: false,
        isvalidPostalcode: false
    })

    return (

        <View style={styles.container}>
            <ProgressSteps activeStepIconBorderColor='#888765' completedProgressBarColor='#FFFC1B' activeStepIconColor='#FFFC1B' completedStepIconColor='#FFFC1B' labelFontFamily='pr-light' activeLabelColor='#000' completedCheckColor='#000'>
                <ProgressStep label="บัญชี" nextBtnText='ถัดไป' nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name="person-circle-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดชื่อผู้ใช้</Text></View>
                        <TextInput style={styles.FillFormText}></TextInput>
                        {user.isvalidUsername ? null : <View><Text style={styles.validText}>*ระบุ 4 - 16 ตัวอักษร</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name="lock-closed-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดรหัสผ่าน</Text></View>
                        <TextInput style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                        {user.isvalidPassword ? null : <View><Text style={styles.validText}>*ระบุ 6 - 16 ตัวอักษร</Text></View>}
                    </View>

                </ProgressStep>
                <ProgressStep label="ข้อมูลผู้ใช้" nextBtnText='ถัดไป' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ชื่อจริง</Text></View>
                        <TextInput style={styles.FillFormText}></TextInput>
                        {user.isvalidUsername ? null : <View><Text style={styles.validText}>*ระบุไม่เกิน 16 ตัวอักษร</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>นามสกุล</Text></View>
                        <TextInput style={styles.FillFormText} style={styles.FillFormText}></TextInput>

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
                        <TextInput style={styles.FillFormText} keyboardType='numeric' secureTextEntry={true} style={styles.FillFormText}></TextInput>
                        {user.isvalidPhonenumber ? null : <View><Text style={styles.validText}>*ระบุเบอร์ให้ถูกต้อง</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อีเมล</Text></View>
                        <TextInput style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ไลน์</Text></View>
                        <TextInput style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                    </View>

                </ProgressStep>
                <ProgressStep label="ข้อมูลร้าน" finishBtnText='ยืนยัน' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.FormFillTitle}>ชื่อร้านอาหาร</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidRestaurantname ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name='location-outline' size={24} style={{ marginRight: 5 }}></Ionicons><Text style={styles.FormFillTitle}>ที่อยู่ร้านอาหาร</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidRestaurantname ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ตำบล</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidSubdistrict ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อำเภอ</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidAmphoe ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>จังหวัด</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidProvince ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>รหัสไปรษณีย์</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                            {restaurant.isvalidPostalcode ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>เว็บไซต์ของร้าน</Text></View>
                            <TextInput style={styles.FillFormText}></TextInput>
                        </View>
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


    FormFillTitleGen: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, marginRight: 5 },
    FormContainerGenderTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    GenderContainer: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    genderBtn: { marginHorizontal: 5 },
    genderTxt: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#CCC' },
    FormContainerAgeTitle: { width: '100%', marginVertical: 6, flexDirection: 'row' },
    AgeFillInput: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 100, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16 },
    AgeText: { fontFamily: 'pr-reg', alignItems: 'center', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, color: '#6C6B2B' },
});



export default RegisterForRestaurant;