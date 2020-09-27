import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';



class LoginModeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header__line1}>เลือก</Text>
        <Text style={styles.header__line2}>สิ่งที่คุณต้องการใช้งาน</Text>
        <Text style={styles.header__line3}>ก่อนเข้าสู่ระบบ</Text>
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
  header__line1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26
  },
  header__line2: {
    color: '#989762',
    fontWeight: 'bold',
    fontSize: 20
  },
  header__line3: {
    color: '#D2D18F',
    fontWeight: 'bold',
    fontSize: 16
  }


});

export default LoginModeHeader;
