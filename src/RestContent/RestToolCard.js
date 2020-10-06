import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class RestToolCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tool__logo}>
          <Image source={this.props.imageUri}></Image>
        </View>
        <View style={styles.tool__name}>
          <Text style={styles.tool__name_text}>{this.props.toolName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    elevation: 5,
  },
  tool__logo: {
    width: '100%',
    height: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tool__name: {
    height: '35%',
    width: '100%',
    backgroundColor: '#FFFC1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tool__name_text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default RestToolCard;
