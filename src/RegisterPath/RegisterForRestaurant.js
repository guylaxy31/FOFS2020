import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Modal, Alert, Button } from 'react-native';
import Slider from '@react-native-community/slider';

import ThumbSlider from '../../assets/register/ThumbSlider.png'
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';

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
        isValidPhoneNumber: false,
        isValidEmail: false,
    })

    const [restaurant, setRestaurant] = useState({
        restaurantName: '',
        address: '',
        road: '',
        subdistrict: '',
        amphoe: '',
        province: '',
        postalcode: '',
        website: '',
        isValidRestaurantname: false,
        isValidAddress: false,
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
    const checkRestaurantname = () => { if (restaurant.restaurantName.trim().length >= 1 & restaurant.restaurantName.trim().length <= 16) { setRestaurant({ ...restaurant, isValidRestaurantname: true }) } else { setRestaurant({ ...restaurant, isValidRestaurantname: false }) } }
    const checkAddress = () => { if (restaurant.address.trim().length >= 1 & restaurant.address.trim().length <= 50) { setRestaurant({ ...restaurant, isValidAddress: true }) } else { setRestaurant({ ...restaurant, isValidAddress: false }) } }
    const checkAmphoe = () => { if (restaurant.amphoe.trim().length >= 1 & restaurant.amphoe.trim().length <= 16) { setRestaurant({ ...restaurant, isValidAmphoe: true }) } else { setRestaurant({ ...restaurant, isValidAmphoe: false }) } }
    const checkProvince = () => { if (restaurant.province.trim().length >= 1 & restaurant.province.trim().length <= 16) { setRestaurant({ ...restaurant, isValidProvince: true }) } else { setRestaurant({ ...restaurant, isValidProvince: false }) } }
    const checkPostalcode = () => { if (restaurant.postalcode.trim().length === 5) { setRestaurant({ ...restaurant, isValidPostalcode: true }) } else { setRestaurant({ ...restaurant, isValidPostalcode: false }) } }


    const [conSenseState, setConsenseState] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [authSubmit, setAuthSubmit] = useState(false);


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


        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const [pageValid, setPageValid] = useState({
        error1: false,
        error2: false,
        error3: false
    })

    const onNextStep1 = () => {

        if (user.isValidUsername == true & user.isValidPassword == true) {

            setPageValid({ ...pageValid, error1: false });
        } else {
            Alert.alert(
                //title
                'ไม่สามารถไปยังหน้าถัดไป',
                //body
                'โปรดระบุข้อมูลให้ถูกต้อง',
                [
                    { text: 'ปิด' },
                ],
                { cancelable: false },
                //clicking out side of alert will not cancel
            );
            setPageValid({ ...pageValid, error1: true });
        }
    };

    const onNextStep2 = () => {

        if (user.isValidFirstname == true & user.gender != '' & user.isValidPhoneNumber == true & user.isValidEmail == true) {
            setPageValid({ ...pageValid, error2: false });
        } else {
            Alert.alert(
                //title
                'ไม่สามารถไปยังหน้าถัดไป',
                //body
                'โปรดระบุข้อมูลให้ถูกต้อง',
                [
                    { text: 'ปิด' },
                ],
                { cancelable: false },
                //clicking out side of alert will not cancel
            );
            setPageValid({ ...pageValid, error2: true });
        }
    };

    const onNextStep3 = () => {

        if (restaurant.isValidRestaurantname === true & restaurant.isValidAddress === true & restaurant.isValidAmphoe === true & restaurant.isValidProvince === true & restaurant.isValidPostalcode === true  & image != null) {
            const newImageUri = "file:///" + image.split("file:/").join("");
            let sales = {
                sale_firstname: user.firstname,
                sale_lastname: user.lastname,
                sale_age: user.age,
                sale_phone: user.phonenumber,
                sale_email: user.email,
                username: user.username,
                password: user.password,
                restaurant_name: restaurant.restaurantName,
                addr_line1: restaurant.address,
                road: restaurant.road,
                subdistrict: restaurant.subdistrict,
                district: restaurant.amphoe,
                province: restaurant.province,
                postalcode: restaurant.postalcode,
                line: user.line,
                website: restaurant.website,

            }
            // console.log(sales);
            let formData = new FormData;
            formData.append("sale_firstname",user.firstname);
            formData.append("sale_lastname",user.lastname);
            formData.append("sale_age",user.age);
            formData.append("sale_phone",user.phonenumber);
            formData.append("sale_email",user.email);
            formData.append("username",user.username);
            formData.append("password",user.password);
            formData.append("restaurant_name",restaurant.restaurantName);
            formData.append("addr_line1",restaurant.address);
            formData.append("road",restaurant.road);
            formData.append("subdistrict",restaurant.subdistrict);
            formData.append("district",restaurant.amphoe);
            formData.append("province",restaurant.province);
            formData.append("postalcode",restaurant.postalcode);
            formData.append("line",user.line);
            formData.append("website",restaurant.website);
            formData.append("res_image", {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop()
            });
            
            // const config = {
            //     headers : {"Content-Type" : "application/json"}
            // }
            axios
                .post(`${baseURL}sales/register`, formData)
                .then((res) => {
                    if (res.status == 200) {
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: "Registration Succeeded",
                            text2: "Please Login into your account",
                        });
                        setTimeout(() => {
                            props.navigation.navigate('LoginHome')
                        }, 500)
                    }
                })
                .catch((error) => {
                    Toast.show({
                        topOffset: 60,
                        type: "error",
                        text1: "Something went wrong",
                        text2: "Please try again",
                    });

                });

            setPageValid({ ...pageValid, error3: false });

        } else {
            Alert.alert(
                //title
                'ไม่สามารถยืนยันการสมัคร',
                //body
                'โปรดระบุข้อมูลให้ถูกต้องและยอมรับข้อตกลง',
                [
                    { text: 'ปิด' },
                ],
                { cancelable: false },
                //clicking out side of alert will not cancel
            );
            setPageValid({ ...pageValid, error3: true });
        }
    };

    return (

        <View style={styles.container}>
            <ProgressSteps activeStepIconBorderColor='#888765' completedProgressBarColor='#FFFC1B' activeStepIconColor='#FFFC1B' completedStepIconColor='#FFFC1B' labelFontFamily='pr-light' activeLabelColor='#000' completedCheckColor='#000'>
                {/* ======================================================================= หน้า 1 */}
                <ProgressStep label="บัญชี" nextBtnText='ถัดไป' nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} onNext={onNextStep1} errors={pageValid.error1}>
                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><MaterialCommunityIcons style={{ marginRight: 8, marginLeft: -5 }} name='account' size={24} /><Text style={styles.FormFillTitle}>กำหนดชื่อผู้ใช้</Text></View>
                        <TextInput value={user.username} onChangeText={(val) => setUser({ ...user, username: val })} onEndEditing={() => checkUsername()} style={styles.FillFormText}></TextInput>
                        {user.isValidUsername == true ? null : <View><Text style={styles.validText}>*ระบุ 4 - 16 ตัวอักษร</Text></View>}

                        <View style={{ flexDirection: 'row', marginTop: 15 }}><FontAwesome name="lock" style={{ marginRight: 10 }} size={24} color="black" /><Text style={styles.FormFillTitle}>กำหนดรหัสผ่าน</Text></View>
                        <TextInput value={user.password} onChangeText={(val) => setUser({ ...user, password: val })} onEndEditing={() => checkPassword()} style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                        {user.isValidPassword == true ? null : <View><Text style={styles.validText}>*ระบุ 6 - 16 ตัวอักษร</Text></View>}
                    </View>

                </ProgressStep>

                {/* ======================================================================= หน้า 2 */}
                <ProgressStep label="ข้อมูลผู้ใช้" nextBtnText='ถัดไป' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} onNext={onNextStep2} errors={pageValid.error2}>

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ชื่อจริง</Text></View>
                        <TextInput value={user.firstname} onChangeText={(val) => setUser({ ...user, firstname: val })} onEndEditing={() => checkFirstname()} style={styles.FillFormText}></TextInput>
                        {user.isValidFirstname ? null : <View><Text style={styles.validText}>*ระบุไม่เกิน 16 ตัวอักษร</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>นามสกุล</Text></View>
                        <TextInput value={user.lastname} onChangeText={(val) => setUser({ ...user, lastname: val })} style={styles.FillFormText} secureTextEntry={false}></TextInput>

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
                        <TextInput value={user.phonenumber} keyboardType='numeric' onChangeText={(val) => setUser({ ...user, phonenumber: val })} onEndEditing={() => checkPhonenumber()} style={styles.FillFormText} style={styles.FillFormText}></TextInput>
                        {user.isValidPhoneNumber == true ? null : <View><Text style={styles.validText}>*ระบุเบอร์ให้ถูกต้อง</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อีเมล</Text></View>
                        <TextInput value={user.email} onChangeText={(val) => setUser({ ...user, email: val })} onEndEditing={() => checkEmail()} style={styles.FillFormText} style={styles.FillFormText}></TextInput>
                        {user.isValidEmail == true ? null : <View><Text style={styles.validText}>*ระบุอีเมลให้ถูกต้อง</Text></View>}
                        <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ไลน์</Text></View>
                        <TextInput value={user.line} onChangeText={(val) => setUser({ ...user, line: val })} style={styles.FillFormText} style={styles.FillFormText}></TextInput>
                    </View>

                </ProgressStep>

                {/* ======================================================================= หน้า 3 */}
                <ProgressStep label="ข้อมูลร้าน" finishBtnText='ยืนยัน' previousBtnText="ย้อนกลับ" nextBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} previousBtnTextStyle={{ fontFamily: 'pr-reg', color: '#000' }} onSubmit={onNextStep3} errors={pageValid.error3}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.FormContainer}>

                            <TouchableOpacity onPress={pickImage} style={styles.addIMGBox}>
                                <View style={{ alignItems: 'center' }}>

                                    <Text style={{ fontFamily: 'pr-reg' }}>+ เพิ่ม/แก้ไขรูป</Text>
                                </View>
                            </TouchableOpacity>
                            {image === null ? <View style={{ marginTop: 30 }}><Text style={styles.validText}>*เพิ่มรูปร้านเพื่อการตรวจสอบ</Text></View> : null}
                        </View>

                        <View style={styles.FormContainer}>
                            {image && <View style={{ flexDirection: 'row', marginLeft: 40 }}><Image source={{ uri: image }} style={{ width: 150, height: 150 }} /></View>}
                        </View>

                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row' }}><Text style={styles.FormFillTitle}>ชื่อร้านอาหาร</Text></View>
                            <TextInput value={restaurant.restaurantName} onChangeText={(val) => setRestaurant({ ...restaurant, restaurantName: val })} onEndEditing={() => checkRestaurantname()} style={styles.FillFormText}></TextInput>
                            {restaurant.isValidRestaurantname == true ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Ionicons name='location-outline' size={24} style={{ marginRight: 5 }}></Ionicons><Text style={styles.FormFillTitle}>ที่อยู่ร้านอาหาร</Text></View>
                            <TextInput value={restaurant.address} onChangeText={(val) => setRestaurant({ ...restaurant, address: val })} onEndEditing={() => checkAddress()} style={styles.FillFormText}></TextInput>
                            {restaurant.isValidAddress ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ถนน</Text></View>
                            <TextInput value={restaurant.road} onChangeText={(val) => setRestaurant({ ...restaurant, road: val })} style={styles.FillFormText}></TextInput>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>ตำบล</Text></View>
                            <TextInput value={restaurant.subdistrict} onChangeText={(val) => setRestaurant({ ...restaurant, subdistrict: val })} style={styles.FillFormText}></TextInput>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>อำเภอ</Text></View>
                            <TextInput value={restaurant.amphoe} onChangeText={(val) => setRestaurant({ ...restaurant, amphoe: val })} onEndEditing={() => checkAmphoe()} style={styles.FillFormText}></TextInput>
                            {restaurant.isValidAmphoe ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>จังหวัด</Text></View>
                            <TextInput value={restaurant.province} onChangeText={(val) => setRestaurant({ ...restaurant, province: val })} onEndEditing={() => checkProvince()} style={styles.FillFormText}></TextInput>
                            {restaurant.isValidProvince ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>รหัสไปรษณีย์</Text></View>
                            <TextInput value={restaurant.postalcode} keyboardType='numeric' onChangeText={(val) => setRestaurant({ ...restaurant, postalcode: val })} onEndEditing={() => checkPostalcode()} style={styles.FillFormText}></TextInput>
                            {restaurant.isValidPostalcode ? null : <View><Text style={styles.validText}>*ระบุ</Text></View>}
                        </View>
                        <View style={styles.FormContainer}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}><Text style={styles.FormFillTitle}>เว็บไซต์ของร้าน</Text></View>
                            <TextInput value={restaurant.website} onChangeText={(val) => setRestaurant({ ...restaurant, website: val })} style={styles.FillFormText}></TextInput>

                        </View>

                        <TouchableOpacity onPress={() => openConsense()} style={styles.TouchReadButton}><Text style={styles.readforSubmit}>อ่านข้อตกลงเพื่อยอมรับ</Text></TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                            {/* <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => togcheckbox(newValue)}
                            /> */}
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