import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RegisterCustomerForm from './RegisterCustomerForm'

class RegisterCustomerContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RegisterCustomerForm />
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
        flex: 1,
        flexDirection: 'column'

    },




});

export default RegisterCustomerContainer;
