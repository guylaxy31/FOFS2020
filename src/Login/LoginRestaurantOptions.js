import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import LoginCustHeader from './LoginCustHeader'


class LoginCustomerOptions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginCustHeader></LoginCustHeader>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/Foodid_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/OAuth_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/gmail_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.create_new_btn}>
                    <Text>สร้างบัญชีใหม่</Text>
                </TouchableOpacity>

                <View style={styles.img_mode}>
                    {/* <Image style={styles.img__} source={require('../../assets/login/OAuth_btn.png')}></Image> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Prompt-Regular'
    },

    login_button: {
        width: 'auto',
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        marginBottom: '2%',
        backgroundColor: '#FFF'


    }, create_new_btn: {
        backgroundColor: '#FFF',
        padding: '1%',
        marginTop: '10%',
        marginBottom: '3%'
    }

});

export default LoginCustomerOptions;
