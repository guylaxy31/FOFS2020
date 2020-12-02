import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PromotionCate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgBorder} source={this.props.imageUri}></Image>
        </View>
        <View>
          <Text style={{ fontFamily: 'Prompt-Light', marginTop: 10 }}>{this.props.foodName}</Text>
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
    marginRight: 20
  },
  imgContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.26,
    backgroundColor: '#FFF',
    padding: 1
  }
  ,
  imgBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 150,
    width: 150,

  },
});

export default PromotionCate;
