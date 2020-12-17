import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import RecommendItem from './RecommendItem';
import HextagonIcon from './HextagonIcon';

class RecommendContainer extends Component {
  render() {

    this.state = {
      restaurantLIST: [
        {
          imageUri: require('../../assets/recommends/200718pic1.jpg'),
          foodName: 'ไก่ทอด',
          resName: 'ร้านก๋วยเตี๋ยวลุงชัย'
        },
        {
          imageUri: require('../../assets/recommends/200718pic2.jpg'),
          foodName: 'ข้าวมันไก่',
          resName: 'ร้านนายยง'
        },
        {
          imageUri: require('../../assets/recommends/200718pic3.jpg'),
          foodName: 'ข้าวราด',
          resName: 'ร้านลุงชม'
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
            <RecommendItem imageUri={item.imageUri} foodName={item.foodName} resName={item.resName} />}
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
