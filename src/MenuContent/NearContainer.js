import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import NearItem from './NearItem';
import HextagonIcon from './HextagonIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

class NearContainer extends Component {
  render() {

    this.state = {
      nearLIST: [
        {
          resName: 'ร้าน NeuCafe',
          imageUri: require('../../assets/near/coffee.jpg'),
          distance: '0.25 km'
        },
        {
          resName: 'ร้าน SmileItalia',
          imageUri: require('../../assets/near/pizza.jpg'),
          distance: '0.4 km'
        },

      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleAlign}>
          <HextagonIcon />
          <Text style={styles.headerText}>จากร้านอาหารใกล้คุณ</Text>
        </View>


        <FlatList
          data={this.state.nearLIST}
          renderItem={({ item }) =>
            <TouchableOpacity><NearItem imageUri={item.imageUri} resName={item.resName} distance={item.distance} /></TouchableOpacity>}
          keyExtractor={item => item.id}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.nearStyle}
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
  headerText: { paddingLeft: 10, fontFamily: 'pr-reg', fontSize: 18 },
  nearStyle: {
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

export default NearContainer;
