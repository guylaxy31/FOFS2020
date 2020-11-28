import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements';


class NavTop extends Component {


  render() {
    return (

      <Header
        containerStyle={{
          backgroundColor: '#FFFC1B',
        }}
        leftComponent={{ icon: 'menu', color: '#000' }}

        rightComponent={{ icon: 'person', color: '#000', }}
      >


      </Header>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#FFFC1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavTop;
