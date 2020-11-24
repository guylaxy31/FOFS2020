import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import NavTop from '../NavTop/NavTop';
import HeaderName from '../NavTop/HeaderName';
import MenuBottomMain from '../Menu/MenuBottomMain';
import CustContentMain from '../CustContent/CustContentMain';


// หน้าหลักของแอปพลิเคชัน

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* Nav ประกอบไปด้วย drawer และ profile icon */}
        <NavTop style={styles.nav__container}></NavTop>
        {/* เปลี่ยนตรง page ได้ */}
        <HeaderName page="หน้าหลัก"></HeaderName>

        {/* พื้นที่แสดงเนื้อหา */}
        <ScrollView
          style={styles.scroll_View}
          showsVerticalScrollIndicator={false}
        >
          <CustContentMain></CustContentMain>
        </ScrollView>

        {/* ปุ่มเนนูต่างๆ */}
        <MenuBottomMain style={styles.menu__container}></MenuBottomMain>
      </View >
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
