import React, { Component, useState } from 'react';
import { CheckBox, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import HextagonIcon from '../MenuContent/HextagonIcon';


class RegisterCustomerForm extends Component {
    state = {
        termsAccepted: false
    }

    handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted })
    render() {

        return (
            <View style={styles.container}>

                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                    <View style={styles.RegisterTitle}><HextagonIcon /><Text style={styles.TitleText}>สร้างบัญชีใหม่</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>ชื่อผู้ใช้</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>รหัสผ่าน</Text></View>
                    <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.FillFormText}></TextInput></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เพศ</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อายุ</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>สถานภาพ</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>หน่วยงาน/สังกัด/คณะ</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>เบอร์โทรศัพท์</Text></View>
                    <View style={styles.FormContainer}><Text style={styles.FormFillTitle}>อีเมลล์</Text></View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',

    }, RegisterTitle: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',

    }, TitleText: {
        fontFamily: 'pr-bold',
        fontSize: 20,
        marginLeft: 5,
        marginVertical: 20
    }, FormContainer: {

        width: '100%',
        marginVertical: 6
    }, FormFillTitle: {
        fontFamily: 'pr-reg',
        fontSize: 18,
        paddingLeft: 70
    }, FillFormText: {
        backgroundColor: '#FFFFE3',
        marginLeft: 70,
        width: 250,
        paddingVertical: 5,
        paddingHorizontal: 20
    }




});

export default RegisterCustomerForm;
