import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Ionicons } from '@expo/vector-icons';

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
            <ProgressSteps activeStepIconBorderColor='#888765' completedProgressBarColor='#FFFC1B' activeStepIconColor='#FFFC1B' completedStepIconColor='#FFFC1B' labelFontFamily='pr-light' activeLabelColor='#000' completedCheckColor='#000'>
                <ProgressStep label="บัญชี">

                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row' }}><Ionicons name="person-circle-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดชื่อผู้ใช้</Text></View>
                        <TextInput style={styles.FillFormText}></TextInput>
                    </View>
                    <View style={styles.FormContainer}>
                        <View style={{ flexDirection: 'row' }}><Ionicons name="lock-closed-outline" style={{ marginRight: 3 }} size={24} /><Text style={styles.FormFillTitle}>กำหนดรหัสผ่าน</Text></View>
                        <TextInput style={styles.FillFormText} secureTextEntry={true} style={styles.FillFormText}></TextInput>
                    </View>

                </ProgressStep>
                <ProgressStep label="ข้อมูลผู้ใช้">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="ข้อมูลร้าน">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View >
    );
}

const styles = StyleSheet.create({
    container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', flex: 1, flexDirection: 'column' },

    FillFormText: { fontFamily: 'pr-reg', color: '#838383', backgroundColor: '#FFFFE3', width: 220, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 15, fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, marginTop: 10 },
    FormContainer: { width: '100%', marginTop: 20, marginLeft: 40 },
    FormFillTitle: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, alignSelf: 'center' },

});



export default RegisterForRestaurant;