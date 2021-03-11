import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


class RecommendRestaurant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageshadow}>
          <Image style={styles.imgBorder} source={{ uri: this.props.imageUri }}></Image>
        </View>
        <View>
          <Text style={{ fontFamily: 'pr-light', marginTop: 10 }}>ร้าน{this.props.resName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 10,

  }
  ,
  imgBorder: {


    height: 150,
    width: 150,
    borderRadius: 15

  },
});

export default RecommendRestaurant;
