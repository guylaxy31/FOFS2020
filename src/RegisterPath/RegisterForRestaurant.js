import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Modal, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux'

// import AnimatedMultistep from "react-native-animated-multistep";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const RegisterForRestaurant = props => {

    const [restaurant, setRestaurant] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        gender: '',
        age: '20',
        phonenumber: '',
        email: '',
        facebook: '',
        line: '',

        isvalidUsername: false,
        isvalidPassword: false,
        isvalidFirstname: false,
        isvalidPhonenumber: false,
    })

    return (

        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep label="First Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Second Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Third Step">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },

});



export default RegisterForRestaurant;