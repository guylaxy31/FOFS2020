import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';


const AdminRestaurantList = props => {

    return (
        <View style={styles.container}>
            <Text>List</Text>
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
    },
    CardContainer: {
        backgroundColor: '#FFF',
        shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 6,
        elevation: 3, shadowOpacity: 0.26,
        borderRadius: 15, padding: 25
    }, RestTitleRow: {
        flex: 1,
        flexDirection: 'row'
    }, RestTxtBold: {
        fontFamily: 'pr-bold',
        fontSize: 16,
        marginRight: 5
    }, RestTxtLight: {
        fontFamily: 'pr-reg',
        fontSize: 16,
    }

});


export default AdminRestaurantList