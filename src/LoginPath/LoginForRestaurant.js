import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native';
import HextagonIcon from '../Themes/HextagonIcon';

const LoginForRestaurant = props => {
    return (
        <View style={styles.container}>

            <View style={styles.HeaderContainer}>
                <View style={styles.HeaderWithIcon} ><HextagonIcon /><Text style={styles.LoginHeader}>เข้าสู่ระบบ</Text></View>
                <View><Text style={styles.LoginSubHeader}>จัดการร้านอาหาร</Text></View>
            </View>

            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} style={styles.KeyboardContainer}>
                <View style={styles.FormContainer}>
                    <View style={styles.FormContainer}><Text style={styles.LoginForm}>ชื่อผู้ใช้</Text></View>
                    <View style={styles.FormContainer}><TextInput style={styles.id_field} /></View>
                    <View style={styles.FormContainer}><Text style={styles.LoginForm}>รหัสผ่าน</Text></View>
                    <View style={styles.FormContainer}><TextInput secureTextEntry={true} style={styles.pass_field} /></View>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantHome')} style={styles.LoginButton}><Text style={styles.LoginButtonText}>เข้าสู่ระบบ</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('RegisterForRestaurant')}><Text style={styles.register_txt}>ส่งร้านอาหารเข้าร่วม</Text></TouchableOpacity >
            <TouchableOpacity><Text style={styles.ForgetAndRegister}>ลืมรหัสผ่าน</Text></TouchableOpacity>

        </View >
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },

    FormContainer: { width: '100%', marginLeft: 200 },
    LoginForm: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, paddingVertical: 16, },
    HeaderContainer: { marginBottom: 15 },
    id_field: { width: 250, height: 50, padding: 15, color: '#000', backgroundColor: '#FFFFE3', fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
    pass_field: { width: 250, height: 50, padding: 15, color: '#000', backgroundColor: '#FFFFE3', fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },


    LoginHeader: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 20 : 22, color: '#000', marginLeft: 5 },
    LoginSubHeader: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 18 : 20, color: '#929292' },
    HeaderWithIcon: { flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', },

    LoginButton: { color: '#000', backgroundColor: '#FFFC1B', margin: 15, borderRadius: 15, marginVertical: Dimensions.get('window').height < 1000 ? 40 : 50 },
    LoginButtonText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 },

    register_txt: { fontSize: 16, fontFamily: 'pr-light' },
    ForgetAndRegister: { fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, color: '#6F6F6F', margin: 10 },
    FormContainer: { justifyContent: 'center' }


});

export default LoginForRestaurant;