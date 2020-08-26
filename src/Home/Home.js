import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import NavTop from '../NavTop/NavTop';
import HeaderName from '../NavTop/HeaderName';
import Menu from '../Menu/Menu';
// หน้าหลักของแอปพลิเคชัน

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavTop style={styles.nav__container}></NavTop>
        <HeaderName></HeaderName>
        <ScrollView style={styles.scroll_View}></ScrollView>
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
  scroll_View: { alignSelf: 'stretch', backgroundColor: '#fff' },
});

export default Home;
