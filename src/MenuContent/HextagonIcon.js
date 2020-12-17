import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class HextagonIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/theme/hextagon.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignSelf: 'center' },
});

export default HextagonIcon;
