import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

class ModeTitle extends Component {

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
  container: { width: '100%', backgroundColor: '#FFFC1B', alignItems: 'center', justifyContent: 'center', marginVertical: Dimensions.get('window').height < 800 ? 50 : 80, paddingVertical: Dimensions.get('window').height < 800 ? 28 : 34, shadowOffset: { width: 0, height: 0 }, shadowColor: '#000', shadowOpacity: 0.1, elevation: 3, },
  header__line1: { color: '#000', fontSize: Dimensions.get('window').height < 1000 ? 30 : 35, fontFamily: 'pr-reg' },
  header__line2: { color: '#989762', fontSize: Dimensions.get('window').height < 1000 ? 18 : 22, fontFamily: 'pr-reg' },
  header__line3: { color: '#D2D18F', fontSize: Dimensions.get('window').height < 1000 ? 16 : 18, fontFamily: 'pr-reg' }
});

export default ModeTitle;