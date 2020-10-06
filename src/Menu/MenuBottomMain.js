import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// เมนูที่ขอบด้านล่างจอ

class MenuBottomMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MENU BUTTONS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '7%',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default MenuBottomMain;
