import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import NavTop from '../NavTop/NavTop';
import Menu from '../Menu/Menu';
// หน้าหลักของแอปพลิเคชัน

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavTop style={styles.nav__container}></NavTop>
        <ScrollView>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
          <Text>CONTENT AREA</Text>
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
});

export default Home;
