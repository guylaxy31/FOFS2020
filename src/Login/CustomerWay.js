import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';




const CustomerWay = props => {

    return (

        <View style={styles.container}>

            <TouchableOpacity onPress={() => props.navigation.navigate('CustomerFoodIDscreen')} style={styles.TouchContainer}><Image style={styles.WayButton} source={require('../../assets/login/Foodid_btn.png')} /></TouchableOpacity>
            {/* <TouchableOpacity style={styles.TouchContainer}><Image style={styles.WayButton} source={require('../../assets/login/OAuth_btn.png')} /></TouchableOpacity>
            <TouchableOpacity style={styles.TouchContainer}><Image style={styles.WayButton} source={require('../../assets/login/Gmail_btn.png')} /></TouchableOpacity> */}

            <TouchableOpacity style={styles.create_new_btn}>
                <Text style={styles.register_txt}>สร้างบัญชีใหม่</Text>
            </TouchableOpacity>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: 'auto',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

    },

    create_new_btn: {
        backgroundColor: '#FFF',
        padding: '1%',
        marginTop: '10%',
        marginBottom: '3%'

    }, register_txt: {
        fontSize: 16,
        fontFamily: 'pr-light'
    }
    , WayButton: {

        width: 150,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 15,
    }

});

export default CustomerWay;
