import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import PromotionItem from './PromotionItem';
import HextagonIcon from './HextagonIcon';

class PromotionContainer extends Component {
  render() {

    this.state = {
      promotionLIST: [
        {
          promotionTitle: 'KFC',
          imageUri: require('../../assets/promotions/promotionKFCtest.jpg'),
        },
        {
          promotionTitle: 'Macdonal',
          imageUri: require('../../assets/promotions/promotionMctest.jpg'),
        },
        {
          promotionTitle: 'Pizza',
          imageUri: require('../../assets/promotions/promotionPizzatest.jpg'),
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
            <PromotionItem imageUri={item.imageUri} />}
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
  flatListStyle: {
    marginTop: '3%',
    paddingVertical: 15

  },
});

export default PromotionContainer;
