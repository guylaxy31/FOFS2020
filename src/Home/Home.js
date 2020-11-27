import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


import NavTop from '../NavTop/NavTop';
import HeaderName from '../NavTop/HeaderName';
import MenuBottomMain from '../Menu/MenuBottomMain';
import CustContentMain from '../CustContent/CustContentMain';
import LoginModeMain from '../Login/LoginModeMain'

let customFonts = {
  'Prompt-Bold': require('../../assets/fonts/Prompt-Bold.ttf'),
  'Prompt-Regular': require('../../assets/fonts/Prompt-Regular.ttf'),
  'Prompt-Light': require('../../assets/fonts/Prompt-Light.ttf'),
};

// หน้าหลักของแอปพลิเคชัน

class Home extends Component {

  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {

    if (this.state.fontsLoaded) {
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
    } else {
      return <AppLoading />;
    }

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
