import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import PromotionCate from './PromotionCate';

class Promotion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>โปรโมชั่น ส่วนลด</Text>
        <ScrollView
          style={styles.scrollStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {/* ลูปเรียกตัว PromotionCate */}
          <PromotionCate
            imageUri={require('../../assets/promotions/promotionKFCtest.jpg')}
          ></PromotionCate>
          <PromotionCate
            imageUri={require('../../assets/promotions/promotionMctest.jpg')}
          ></PromotionCate>
          <PromotionCate
            imageUri={require('../../assets/promotions/promotionPizzatest.jpg')}
          ></PromotionCate>
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
  baseText: {},
  scrollStyle: {
    marginTop: '3%',
  },
});

export default Promotion;
