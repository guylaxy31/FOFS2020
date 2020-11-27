import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alignRow}>
          <Icon
            style={styles.iconAlign}
            name="search"
            size={25}
            color="#D6D434"
          />
          <Text style={styles.find__descrip, { fontFamily: 'Prompt-Light' }} >
            ค้นหาชื่อร้านอาหาร / ชื่อเมนู
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: '10%',
    marginRight: '10%',
    height: '3%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFD9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7%',
  },
  find__descrip: {
    flex: 1,
    color: '#D6D434',

    alignSelf: 'center',
  },
  alignRow: {
    flex: 1,
    flexDirection: 'row',
  },
  iconAlign: {
    marginRight: '10%',
  },
});

export default SearchBox;
