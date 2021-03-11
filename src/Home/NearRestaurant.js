import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class NearRestaurant extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgBorder} source={{ uri: this.props.imageUri }}></Image>
        </View>
        <View>
          <Text style={{ fontFamily: 'pr-light', marginTop: 10 }}>{this.props.resName}</Text>

        </View>
        {/* <View>
          <Text style={{ fontFamily: 'pr-light', color: 'gray' }}>{this.props.distance}</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    height: null,
    width: 150,
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10
  },
  imgContainer: {

    borderRadius: 15
  }
  ,
  imgBorder: {

    height: 150,
    width: 150,
    borderRadius: 15
  },
});

export default NearRestaurant;
