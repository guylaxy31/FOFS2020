import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Hextagon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.imageUri}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignSelf: 'center' },
});

export default Hextagon;
