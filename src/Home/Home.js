import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import NavTop from '../NavTop/NavTop';
import HeaderName from '../NavTop/HeaderName';
import Menu from '../Menu/Menu';
// import CustContent from '../CustContent/CustContent';
// import RestContent from '../RestContent/RestContent'
// import LoginMode from '../Login/LoginMode'
//import LoginCustomerOptions from '../Login/LoginCustomerOptions'
import RegisterCust from '../Register/RegisterCust'

// หน้าหลักของแอปพลิเคชัน

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <NavTop style={styles.nav__container}></NavTop> */}
        {/* <HeaderName></HeaderName> */}
        <ScrollView
          style={styles.scroll_View}
          showsVerticalScrollIndicator={false}
        >
          <RegisterCust></RegisterCust>
          {/* <LoginMode></LoginMode> */}
          {/* <CustContent style={styles.content__container}></CustContent> */}
          {/* <RestContent style={styles.content__container}></RestContent> */}
        </ScrollView>
        <Menu style={styles.menu__container}></Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nav__container: {
    flex: 1,
  },
  menu__container: {
    flex: 1,
  },
  scroll_View: {
    height: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
  },
  content__container: {
    height: '100%',
    alignSelf: 'stretch',
  },

});

export default Home;
