import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HeaderName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.HeaderFont}>{this.props.page}</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFE9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderFont: {
    fontFamily: 'Prompt-Regular',
    fontSize: 16,

  },
});

export default HeaderName
