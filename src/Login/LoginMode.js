import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import ModeTitle from './ModeTitle'


const LoginMode = props => {

  return (
    <View style={styles.container}>
      <ModeTitle />
      <View style={styles.login__mode__layout}>
        <View style={styles.mode_space}>
          <TouchableOpacity onPress={() => props.navigation.navigate('CustomerWayscreen')}>
            <View style={styles.img_mode}>
              <Image style={styles.img__} source={require('../../assets/login/customer_mode_logo.png')}></Image>
            </View>
            <View style={styles.alignText}><Text style={styles.findFood}>หาอาหารรับประทาน</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.mode_space} >
          <TouchableOpacity onPress={() => props.navigation.navigate('RestaurantAppIDscreen')}>
            <View style={styles.img_mode}>
              <Image style={styles.img__} source={require('../../assets/login/restaurant_mode_logo.png')}></Image>
            </View>
            <View style={styles.alignText}><Text style={{ fontFamily: 'pr-light', fontSize: 16 }}>จัดการร้านอาหาร</Text></View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
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
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF'

  }, mode_space: {
    height: '60%',
    width: '40%',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFF',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.26,
    padding: 1,
    borderRadius: 15
  }, findFood: {
    fontFamily: 'pr-light', fontSize: 18,
  }, alignText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img_mode: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: null,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center'
  },



});

export default LoginMode;
