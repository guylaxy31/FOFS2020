import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class LoginCustHeader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header__line1}>เข้าสู่ระบบ</Text>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#FFFC1B',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '15%',
        paddingVertical: '5%',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 3,
    },
});

export default LoginCustHeader;
