import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



class ResgisterTitle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/theme/hextagon.png')}></Image>
                <Text style={styles.title_register}>สร้างบัญชี</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '15%',
        padding: 20,
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'5%'
    }, title_register: {
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: 'bold'
    }




});

export default ResgisterTitle;
