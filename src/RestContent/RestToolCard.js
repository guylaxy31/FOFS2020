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
    height: '100%',
    width: '45%',
    alignSelf: 'stretch',
    alignItems: 'center',

    backgroundColor: '#FFF',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.3,
    padding: 1,
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
