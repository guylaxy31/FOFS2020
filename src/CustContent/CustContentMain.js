import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from './SearchBox';
import Promotion from './Promotion';
import Recommend from './Recommend';
import Near from './์Near';

class CustContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox></SearchBox>
        <Promotion></Promotion>
        <Recommend></Recommend>
        <Near></Near>
        <View>
          <Text>ดูร้านอาหารทั้งหมด</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustContent;
