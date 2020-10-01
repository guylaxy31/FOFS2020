import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



class LoginCustMode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.img_mode}>
                    <Image style={styles.img__} source={require('../../assets/login/customer_mode_logo.png')}></Image>
                </View>
                <View style={styles.mode_btn}>
                    <Text>หาอาหารรับประทาน</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '45%',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#FFF'
    },

    mode_btn: {
        marginTop: 20,
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 3,
        paddingVertical: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    img_mode: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center'
    },

});

export default LoginCustMode;
