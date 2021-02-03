import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ModeTitle from './ModeTitle'


const LoginMode = props => {

  return (

    < View style={styles.container} >
      <ScrollView style={styles.ScrollContainer} horizontal={false}>
        <ModeTitle />
        <View style={styles.login__mode__layout}>
          <View style={Dimensions.get('window').width < Dimensions.get('window').height ? styles.mode_space : styles.mode_space2}>
            <TouchableOpacity style={styles.TouchScale} onPress={() => props.navigation.navigate('RegisterForCustomer')}>
              <View style={styles.img_mode}>
                <Image source={require('../../assets/login/customer_mode_logo.png')}></Image>
              </View>
              <View style={styles.alignText}><Text style={styles.TextinBox}>บัญชีผู้ใช้งาน</Text></View>
            </TouchableOpacity>
          </View>
          <View style={Dimensions.get('window').width < Dimensions.get('window').height ? styles.mode_space : styles.mode_space2}  >
            <TouchableOpacity style={styles.TouchScale} onPress={() => props.navigation.navigate('RegisterForRestaurant')}>
              <View style={styles.img_mode}>
                <Image source={require('../../assets/login/restaurant_mode_logo.png')}></Image>
              </View>
              <View style={styles.alignText}><Text style={styles.TextinBox}>บัญชีร้านอาหาร</Text></View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </View >

  );
}


const styles = StyleSheet.create({
  container: { height: '100%', width: '100%', alignSelf: 'stretch', backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
  ScrollContainer: { backgroundColor: '#FFF', width: '100%' },

  login__mode__layout: { width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFF', marginBottom: '15%' },
  mode_space: { height: Dimensions.get('window').height * .325, width: Dimensions.get('window').width * .42, alignItems: 'center', backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 3, shadowOpacity: 0.26, padding: 1, borderRadius: 15 },
  mode_space2: { height: Dimensions.get('window').height * .42, width: Dimensions.get('window').width * .325, alignItems: 'center', backgroundColor: '#FFF', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowRadius: 3, elevation: 3, shadowOpacity: 0.26, padding: 1, borderRadius: 15 },
  TouchScale: { backgroundColor: '#FFF', width: '100%', height: '100%', borderRadius: 15 },

  TextinBox: { fontFamily: 'pr-light', fontSize: Dimensions.get('window').height < 1000 ? 16 : 20 },
  alignText: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  img_mode: { flex: 1, flexDirection: 'row', height: '100%', width: null, justifyContent: 'center', padding: 15, alignItems: 'center' },
});

export default LoginMode;
