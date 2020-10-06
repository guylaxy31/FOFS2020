import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import LoginCustOptionIDHeader from './LoginCustOptionIDHeader'


class LoginCust1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginCustOptionIDHeader></LoginCustOptionIDHeader>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/foodid_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/oauth_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login_button}>
                    <Image style={styles.img__} source={require('../../assets/login/gmail_btn.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.create_new_btn}>
                    <Text style={styles.register_txt}>สร้างบัญชีใหม่</Text>
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

    },

    login_button: {
        width: 'auto',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '2%',
        backgroundColor: '#FFF'


    }, create_new_btn: {
        backgroundColor: '#FFF',
        padding: '1%',
        marginTop: '10%',
        marginBottom: '3%'
         
    },register_txt:{
        fontSize:16
    }

});

export default LoginCust1;
