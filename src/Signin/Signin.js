import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Signin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Signin</Text>
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

export default Signin;
