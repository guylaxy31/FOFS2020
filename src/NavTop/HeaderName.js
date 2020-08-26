import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HeaderName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.HeaderFont}>หน้าหลัก</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '6%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFE9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderFont: {},
});

export default HeaderName;
