import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NavTop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Top Navigation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFC1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavTop;
