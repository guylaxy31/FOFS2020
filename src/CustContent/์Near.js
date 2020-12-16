import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import NearCate from './NearCate';
import Hextagon from './Hextagon';

class Near extends Component {
  render() {

    this.state = {
      nearLIST: [
        {
          resName: 'ร้านลุงชม',
          imageUri: require('../../assets/recommends/200718pic1.jpg'),
        },
        {
          resName: 'ร้านลุงชม',
          imageUri: require('../../assets/recommends/200718pic2.jpg'),
        },
        {
          resName: 'ร้านลุงชม',
          imageUri: require('../../assets/recommends/200718pic3.jpg'),
        },
        {
          resName: 'ร้านลุงชม',
          imageUri: require('../../assets/recommends/200718pic4.jpg'),
        },
        {
          resName: 'ร้านลุงชม',
          imageUri: require('../../assets/recommends/200718pic5.jpg'),
        },
      ]
    }

    return (
      <View style={styles.container}>
        <View style={styles.titleAlign}>
          <Hextagon imageUri={require('../../assets/theme/hextagon.png')} />
          <Text style={styles.headerText}>จากร้านอาหารใกล้คุณ</Text>
        </View>


        <FlatList
          data={this.state.nearLIST}
          renderItem={({ item }) =>
            <NearCate
              imageUri={item.imageUri}
              resName={item.resName}
            ></NearCate>}
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

export default Near;
