import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import RecommendCate from './RecommendCate';

class Recommend extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>เมนูแนะนำ</Text>
        <ScrollView
          style={styles.scrollStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {/* ลูปเรียกตัว PromotionCate */}
          <RecommendCate
            imageUri={require('../../assets/recommends/200718pic1.jpg')}
            foodName="น่องไก่ทอด"
            resName="ร้านอิ่มจัง"
          ></RecommendCate>
          <RecommendCate
            imageUri={require('../../assets/recommends/200718pic2.jpg')}
            foodName="ข้าวมันไก่"
            resName="ร้านนายยง"
          ></RecommendCate>
          <RecommendCate
            imageUri={require('../../assets/recommends/200718pic3.jpg')}
            foodName="ข้าวราด"
            resName="ร้านลุงชม"
          ></RecommendCate>
          <RecommendCate
            imageUri={require('../../assets/recommends/200718pic4.jpg')}
            foodName="น่องไก่ทอด"
            resName="ร้านไก่หรรษา"
          ></RecommendCate>
          <RecommendCate
            imageUri={require('../../assets/recommends/200718pic5.jpg')}
            foodName="ข้าวมันไก่"
            resName="ร้านป้าอร"
          ></RecommendCate>
        </ScrollView>
      </View>
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
  headerText: { flex: 1, alignSelf: 'flex-start', marginLeft: 20 },
  scrollStyle: {
    marginTop: '3%',
  },
});

export default Recommend;
