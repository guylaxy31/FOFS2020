import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RestHeaderStatus from './RestHeaderStatus'
import RestTool from './RestTool';

class RestContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RestHeaderStatus/>
        <RestTool />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RestContent;
