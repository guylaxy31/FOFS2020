import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PromotionItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgBorder} source={this.props.imageUri}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: null,
    width: null,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 3
  },
  imgContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    shadowOpacity: 0.26,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFFC1B',
    borderRadius: 20,


  },
  imgBorder: {
    height: 180,
    width: 320,
    borderRadius: 20,
  },
});

export default PromotionItem;
