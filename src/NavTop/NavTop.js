import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// I C O N
import { Header } from 'react-native-elements';

// R E D U X
import { connect } from 'react-redux'


// N A V I G A T I O N


const NavTop = props => {
  console.log('-----------Nav-top-----------')
  console.log(props)
  const login_activate = props.loginStatus.loginState

  if (login_activate === 0) {
    console.log('Login status = 0')
    return (
      <Header
        containerStyle={{
          backgroundColor: '#FFFC1B',
          height: 60,
          flexDirection: 'row',
          paddingTop: 0
        }}

        leftComponent={{ icon: 'menu', color: '#000', style: { marginLeft: 10 } }}
        rightComponent={
          <TouchableOpacity onPress={() => props.navigation.navigate('LoginModescreen')}><Text style={{ fontFamily: 'pr-reg', marginRight: 10 }}>เข้าสู่ระบบ</Text></ TouchableOpacity>
        }
      // {{ icon: 'person', color: '#000', }}
      >

      </Header >)
  }
  else {
    console.log('Login status Nav is 1')
    return (
      <Header
        containerStyle={{
          backgroundColor: '#FFFC1B',
        }}
        leftComponent={{ icon: 'menu', color: '#000' }}
        rightComponent={{
          text: 'user01', style: { color: '#000' }
        }
        }
      >

      </Header >)
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

  }
});

const mapStatetoProps = (state) => {
  return {
    loginStatus: state.loginStatus,

  }
}

 

 