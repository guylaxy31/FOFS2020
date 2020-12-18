import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import RecommendItem from './RecommendItem';
import HextagonIcon from './HextagonIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

class RecommendContainer extends Component {
  render() {

    this.state = {
      restaurantLIST: [
        {
          imageUri: require('../../assets/recommends/fried-chicken.jpg'),
          foodName: 'ไก่ทอด',
          resName: 'ร้านอาหาร1'
        },
        {
          imageUri: require('../../assets/recommends/chicken-rice.jpg'),
          foodName: 'ข้าวมันไก่',
          resName: 'ร้านอาหาร2'
        },
        {
          imageUri: require('../../assets/recommends/fried-rice.jpg'),
          foodName: 'ข้าวผัด',
          resName: 'ร้านอาหาร3'
        },
        {
          imageUri: require('../../assets/recommends/brownie.jpg'),
          foodName: 'ช็อกโกแลตบราวนี่',
          resName: 'ร้านอาหาร4'
        },
        {
          imageUri: require('../../assets/recommends/spaghetti.jpg'),
          foodName: 'สปาร์เก็ตตี้ขี้เมา',
          resName: 'ร้านอาหาร5'
        },
      ]
    }

    return (

      <View style={styles.container}>
        <View style={styles.titleAlign}>
          <HextagonIcon />
          <Text style={styles.headerText}>เมนูแนะนำ</Text>
        </View>

        <FlatList
          data={this.state.restaurantLIST}
          renderItem={({ item }) =>
            <TouchableOpacity><RecommendItem imageUri={item.imageUri} foodName={item.foodName} resName={item.resName} /></TouchableOpacity>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
    paddingLeft: 10, fontFamily: 'pr-reg', fontSize: 18
  },
  flatListStyle: {
    marginTop: '3%',
    paddingVertical: 15

  },
  titleAlign: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,

  },
});

export default RecommendContainer;
