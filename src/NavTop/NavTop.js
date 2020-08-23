import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

// Navigation ด้านบนสุดของแอปพลิเคชัน
class NavTop extends Component {
  render() {
    return <View style={styles.nav__container}></View>;
  }
}

const styles = StyleSheet.create({
  nav__container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFC1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavTop;
