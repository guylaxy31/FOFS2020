import React from 'react';
import { StyleSheet, ScrollView, View, Button, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux'

import MenuContent from '../MenuContent/MenuContent';
import { Header } from 'react-native-elements';

const Home = props => {

  return (
    <View style={styles.container}>

      <View style={styles.nav__container}>

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
        />
      </View>

      <ScrollView style={styles.scroll_View} showsVerticalScrollIndicator={false}>
        <MenuContent />
      </ScrollView>

    </View >
  );

}


const styles = StyleSheet.create({
  container: {

    flex: 1, backgroundColor: '#FFF', alignSelf: 'stretch',
    alignItems: 'center', justifyContent: 'center',
  },
  nav__container: {

    width: '100%'
  },
  menu__container: {

    flex: 1,
  },
  scroll_View: {

    height: '100%', alignSelf: 'stretch', backgroundColor: '#fff',
    padding: 0, margin: 0,
  },
  content__container: {

    height: '100%', alignSelf: 'stretch',
  },

});

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    loginStatus: state.loginStatus
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name
      })
    },
    login: () => {
      dispatch({
        type: "LOGIN",
      })
    },
    logout: () => {
      dispatch({
        type: "LOGOUT",
      })
    },
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
