import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import HextagonIcon from '../MenuContent/HextagonIcon';




const RestaurantAppID = props => {

    return (

        <View style={styles.container}>

            <View style={styles.HeaderContainer}>
                <View style={styles.HeaderWithIcon} ><HextagonIcon /><Text style={styles.LoginHeader}>เข้าสู่ระบบ</Text></View>
                <View><Text style={styles.LoginSubHeader}>จัดการร้านอาหาร</Text></View>
            </View>

            <View style={styles.FormContainer}>
                <View style={styles.FormContainer}><Text style={styles.LoginForm}>ชื่อผู้ใช้</Text></View>
                <View style={styles.FormContainer}><TextInput style={styles.id_field} /></View>
                <View style={styles.FormContainer}><Text style={styles.LoginForm}>รหัสผ่าน</Text></View>
                <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.pass_field} /></View>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantContainerscreen')} style={styles.LoginButton}><Text style={styles.LoginButtonText}>เข้าสู่ระบบ</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.ForgetAndRegister}>ลืมรหัสผ่าน</Text></TouchableOpacity>
            <TouchableOpacity><Text>สร้างบัญชีใหม่</Text></TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        height: '100%',
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    }, LoginForm: {
        fontFamily: 'pr-reg',
        fontSize: 16,
        paddingVertical: 16,



    }, HeaderWithIcon: {

        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',

    },
    id_field: {
        width: 250,
        height: 50,
        padding: 15,
        color: '#000',
        backgroundColor: '#FFFFE3',
        fontFamily: 'pr-light',
        fontSize: 16
    }, pass_field: {
        width: 250,
        height: 50,
        padding: 15,
        color: '#000',
        backgroundColor: '#FFFFE3',
        fontFamily: 'pr-light',
        fontSize: 16
    }, LoginButton: {
        color: '#000',
        backgroundColor: '#FFFC1B',
        margin: 15,
        borderRadius: 15,
        marginBottom: 25

    },
    LoginButtonText: {
        fontFamily: 'pr-reg',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,

        borderRadius: 15
        ,
    }
    , FormContainer: {

        width: '100%',

        marginLeft: 200
    }, LoginHeader: {
        fontFamily: 'pr-bold',
        fontSize: 20,
        color: '#000',
        marginLeft: 5
    },
    LoginSubHeader: {
        fontFamily: 'pr-reg',
        fontSize: 20,
        color: '#E8E521'
    }, HeaderContainer: {
        marginBottom: 15
    }, ForgetAndRegister: {
        fontFamily: 'pr-light',
        fontSize: 14,
        color: '#000'
        ,
        margin: 10
    }, FormContainer: {
        justifyContent: 'center'
    }
});

export default RestaurantAppID;
