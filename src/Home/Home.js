import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { connect, useDispatch } from 'react-redux'


import NavTop from '../NavTop/NavTop';
import MenuContent from '../MenuContent/MenuContent';

let customFonts = {
  'pr-light': require('../../assets/fonts/Prompt-Light.ttf'),
  'pr-reg': require('../../assets/fonts/Prompt-Regular.ttf'),
  'pr-bold': require('../../assets/fonts/Prompt-Bold.ttf'),
};


class Home extends Component {

  render() {
    return (
      <View style={styles.container}>

        <NavTop style={styles.nav__container}></NavTop>

        {/* <Text style={{ fontFamily: 'pr-reg', marginVertical: 20 }}>สวัสดีคุณ {this.props.user.name} อายุ {this.props.user.age} เงินเดือน {this.props.emp.result}</Text>
          <Button onPress={() => this.props.add(5000)} title="รับเงินเพิ่ม"></Button>
          <Button onPress={() => this.props.login()} title="ลงชื่อเข้าใช้"></Button>
          <Button onPress={() => this.props.logout()} title="ลงชื่อออก"></Button>
          <Text>{this.props.loginStatus.loginState}</Text> */}

        <ScrollView style={styles.scroll_View} showsVerticalScrollIndicator={false}>
          <MenuContent />
        </ScrollView>

      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav__container: {
    flex: 1,

  },
  menu__container: {
    flex: 1,
  },
  scroll_View: {
    height: '100%',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,

  },
  content__container: {
    height: '100%',
    alignSelf: 'stretch',
  },

});

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    emp: state.emp,
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

    add: (val) => {
      dispatch({
        type: "ADD",
        payload: val
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
