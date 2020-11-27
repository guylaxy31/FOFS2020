import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PromotionCate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
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
  },
  imgBorder: {
    height: 180,
    width: 320,

    borderWidth: 1,
    borderColor: '#FFFC1B',
    borderRadius: 15,
  },
});

export default PromotionCate;
