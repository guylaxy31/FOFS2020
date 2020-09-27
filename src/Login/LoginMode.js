import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginModeHeader from './LoginModeHeader'
import LoginCustMode from './LoginCustMode'
import LoginRestMode from './LoginRestMode'

class LoginMode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginModeHeader></LoginModeHeader>
        <View style={styles.login__mode__layout}>
          <LoginCustMode style={styles.mode_space}></LoginCustMode>
          <LoginRestMode style={styles.mode_space}></LoginRestMode>
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

export default LoginMode;
