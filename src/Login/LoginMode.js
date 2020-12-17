import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ModeTitle from './ModeTitle'
import ModeCustomer from './ModeCustomer'
import ModeRestaurant from './ModeRestaurant'

class LoginMode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ModeTitle />
        <View style={styles.login__mode__layout}>
          <ModeCustomer style={styles.mode_space} />
          <ModeRestaurant style={styles.mode_space} />
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
