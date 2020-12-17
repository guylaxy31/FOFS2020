import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from './SearchBox';
import PromotionContainer from './PromotionContainer';
import RecommendContainer from './RecommendContainer';
import NearContainer from './NearContainer';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CustContentMain extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBox></SearchBox>
        <PromotionContainer />
        <RecommendContainer />
        <NearContainer />
        <View>
          <TouchableOpacity><Text style={styles.viewAll}>ดูร้านอาหารทั้งหมด</Text></TouchableOpacity>
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
  }, viewAll: {
    fontFamily: 'pr-reg', fontSize: 18, marginVertical: 18
  }
});

export default CustContentMain;