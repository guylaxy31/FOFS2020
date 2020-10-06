import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginBoxHeader from './LoginBoxHeader'
import LoginCustBox from './LoginCustBox'
import LoginRestBox from './LoginRestBox'

class LoginModeMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginBoxHeader></LoginBoxHeader>
        <View style={styles.login__mode__layout}>
          <LoginCustBox style={styles.mode_space}></LoginCustBox>
          <LoginRestBox style={styles.mode_space}></LoginRestBox>
        </View>
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
    justifyContent: 'center',
  },
  login__mode__layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',


  },


});

export default LoginModeMain;
