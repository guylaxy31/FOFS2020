import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


// เมนูที่ขอบด้านล่างจอ

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MENU</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
