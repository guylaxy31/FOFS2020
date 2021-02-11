import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Alert } from 'react-native';
import HextagonIcon from '../Themes/HextagonIcon';


const LoginHome = props => {
  const [database, setDatabase] = useState({
    username: 'cust01',
    password: '123456'
  })

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const usernameHandler = (input) => {
    setUser(
      {
        ...user,
        username: input
      }
    )
  }

  const passwordHandler = (input) => {
    setUser(
      {
        ...user,
        password: input
      }
    )
  }

  const checkBeforeLogin = () => {
    if (user.username != database.username || user.password != database.password) {
      Alert.alert(
        //title
        'ไม่สามารถเข้าสู่ระบบได้',
        //body
        'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        [
          { text: 'ปิด' },
        ],
        { cancelable: false },
        //clicking out side of alert will not cancel

      );
    } else {
      props.navigation.navigate('Homescreen')
    }

  }

  return (
    <View style={styles.container}>

      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderWithIcon} ><HextagonIcon /><Text style={styles.LoginHeader}>เข้าสู่ระบบ</Text></View>

      </View>

      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30} style={styles.KeyboardContainer}>
        <View style={styles.FormContainer}>
          <View style={styles.FormContainer}><Text style={styles.LoginForm}>ชื่อผู้ใช้</Text></View>

          <View style={styles.TextInputContainer}><TextInput onChangeText={(val) => usernameHandler(val)} style={styles.id_field} /></View>

          <View style={styles.FormContainer}><Text style={styles.LoginForm}>รหัสผ่าน</Text></View>

          <View style={styles.TextInputContainer}><TextInput onChangeText={(val) => passwordHandler(val)} secureTextEntry={true} style={styles.pass_field} /></View>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.TouchLoginContainer}><TouchableOpacity style={styles.LoginButton} onPress={() => checkBeforeLogin()}><Text style={styles.LoginButtonText}>เข้าสู่ระบบ</Text></TouchableOpacity></View>


      <View style={styles.TouchRegisterContainer}>

        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterHome')}><Text style={styles.registerBtn}>สร้างบัญชีใหม่</Text></TouchableOpacity>

      </View>

      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}><Text style={styles.ForgetAndRegister}>ลืมรหัสผ่าน?</Text></TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', },
  ScrollContainer: { height: '100%', backgroundColor: 'blue' },

  LoginForm: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, paddingVertical: 16, },
  HeaderWithIcon: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },

  id_field: { width: 250, padding: 10, color: '#000', backgroundColor: '#FFFFE3', fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, borderRadius: 15 },
  pass_field: { width: 250, padding: 10, color: '#000', backgroundColor: '#FFFFE3', fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, borderRadius: 15 },

  FormContainer: { width: '100%', marginLeft: 200 },
  TextInputContainer: { borderRadius: 15 },
  LoginHeader: { fontFamily: 'pr-bold', fontSize: Dimensions.get('window').height < 1000 ? 20 : 22, color: '#000', marginLeft: 5 },
  HeaderContainer: { marginBottom: 15, textAlign: 'center', backgroundColor: '#FFF' },


  TouchLoginContainer: { marginBottom: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, shadowOpacity: 0.1, backgroundColor: '#FFFC1B', borderRadius: 15, marginTop: 30 },
  LoginButton: { color: '#000' },
  LoginButtonText: { fontFamily: 'pr-reg', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 15 },

  TouchRegisterContainer: { marginBottom: 5 },
  registerBtn: { fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18 },
  ForgetAndRegister: { fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 14 : 16, color: '#6F6F6F', margin: 10 },
  FormContainer: { justifyContent: 'center' },

});

export default LoginHome;
