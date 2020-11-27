import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PromotionCate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.imgBorder} source={this.props.imageUri}></Image>
        </View>
        <View>
          <Text style={{ fontFamily: 'Prompt-Light' }}>{this.props.foodName}</Text>
          <Text style={{ fontFamily: 'Prompt-Light' }}>{this.props.resName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    height: null,
    width: null,
  },
  imgBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 150,
    width: 150,
  },
});

export default PromotionCate;
