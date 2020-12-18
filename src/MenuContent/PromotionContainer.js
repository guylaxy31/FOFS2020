import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import PromotionItem from './PromotionItem';
import HextagonIcon from './HextagonIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

class PromotionContainer extends Component {
  render() {

    this.state = {
      promotionLIST: [
        {
          promotionTitle: 'shabu',
          imageUri: require('../../assets/promotions/shabupro.jpg'),
        },
        {
          promotionTitle: 'Macdonal',
          imageUri: require('../../assets/promotions/oth.jpg'),
        },
        {
          promotionTitle: 'Pizza',
          imageUri: require('../../assets/promotions/f01.jpg'),
        },
      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleAlign}>
          <HextagonIcon />
          <Text style={styles.baseText}>โปรโมชั่น ส่วนลด</Text>
          <HextagonIcon />
        </View>

        <FlatList
          data={this.state.promotionLIST}
          renderItem={({ item }) =>
            <TouchableOpacity><PromotionItem imageUri={item.imageUri} /></TouchableOpacity>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatListStyle}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
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
  flatListStyle: {
    marginTop: '3%',
    paddingVertical: 15

  },
});

export default PromotionContainer;
