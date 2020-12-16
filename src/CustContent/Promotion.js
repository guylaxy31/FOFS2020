import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import PromotionCate from './PromotionCate';
import Hextagon from './Hextagon';

class Promotion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleAlign}>
          <Hextagon imageUri={require('../../assets/theme/hextagon.png')} />
          <Text style={styles.baseText}>โปรโมชั่น ส่วนลด</Text>
          <Hextagon imageUri={require('../../assets/theme/hextagon.png')} />
        </View>

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
  titleAlign: {
    flex: 1,
    flexDirection: 'row',

  },
  baseText: { paddingHorizontal: 10, fontFamily: 'pr-reg', fontSize: 20 },
  scrollStyle: {
    marginTop: '3%',
    paddingVertical:15

  },
});

export default Promotion;
