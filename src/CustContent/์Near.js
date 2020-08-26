import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import NearCate from './NearCate';

class Near extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>จากร้านอาหารใกล้คุณ</Text>
        <ScrollView
          style={styles.scrollStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {/* ลูปเรียกตัว PromotionCate */}
          <NearCate
            imageUri={require('../../assets/recommends/200718pic1.jpg')}
            resName="ร้านอิ่มจัง"
          ></NearCate>
          <NearCate
            imageUri={require('../../assets/recommends/200718pic2.jpg')}
            resName="ร้านนายยง"
          ></NearCate>
          <NearCate
            imageUri={require('../../assets/recommends/200718pic3.jpg')}
            resName="ร้านลุงชม"
          ></NearCate>
          <NearCate
            imageUri={require('../../assets/recommends/200718pic4.jpg')}
            resName="ร้านไก่หรรษา"
          ></NearCate>
          <NearCate
            imageUri={require('../../assets/recommends/200718pic5.jpg')}
            foodName="ข้าวมันไก่"
            resName="ร้านป้าอร"
          ></NearCate>
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

export default Near;
