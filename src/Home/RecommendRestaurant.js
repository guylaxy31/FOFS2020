import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class RecommendRestaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgBorder} source={{uri:this.props.imageUri}}></Image>
        </View>
        <View>
          <Text style={{ fontFamily: 'pr-light', marginTop: 10 }}>{this.props.foodName}</Text>
          <Text style={{ fontFamily: 'pr-light' }}>{this.props.resName}</Text>
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
    marginRight: 10,
    marginVertical: 10
  },
  imgContainer: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    shadowOpacity: 0.26,
    backgroundColor: '#FFF',
    padding: 1,
    borderRadius: 20

  }
  ,
  imgBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 150,
    width: 150,
    borderRadius: 20

  },
});

export default RecommendRestaurant;
