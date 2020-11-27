import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alignRow}>
          <Icon
            style={styles.iconAlign}
            name="search"
            size={22}
            color="#C7BDAC"
            onPress={() => alert('Search')}
          />

          <TextInput
            placeholder={'ค้นหาชื่อร้านอาหาร / ชื่อเมนู'}
            style={styles.textinput_field} />

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

  alignRow: {
    flex: 1,
    flexDirection: 'row',
  },
  iconAlign: {
    marginRight: '10%',
  }, textinput_field: {
    flex: 1,
    color: '#C7B292',
    alignSelf: 'center',
    fontFamily: 'Prompt-Light',
    fontSize: 14
  }
});

export default SearchBox;
