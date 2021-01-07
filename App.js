import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// R E D U X
import { createStore, combineReducers } from 'redux'
import { userReducer, loginStatus, consenseReducer } from './src/Reducers/Reducers'
import { Provider } from 'react-redux';

// N A V I G A T O R
import AppNavigation from './src/screens/AppNavigation'

const store = createStore(combineReducers({ user: userReducer, loginStatus, consense: consenseReducer }))

let customFonts = {
  'pr-light': require('./assets/fonts/Prompt-Light.ttf'),
  'pr-reg': require('./assets/fonts/Prompt-Regular.ttf'),
  'pr-bold': require('./assets/fonts/Prompt-Bold.ttf'),
};

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };


  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }


  render() {

    if (this.state.fontsLoaded) {
      return (
        <Provider store={store}>

          <AppNavigation />

        </Provider>
      )
    }

    else {
      return <AppLoading />;
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    // ให้มีพื้นที่ 1 ส่วน (Default Column)
    alignSelf: 'stretch',       // ให้ child ใน container align ให้ match กับ height ของ container (Column direction)
    alignItems: 'center',       // จัดให้ container มันเองอยู่ตอนกลาง ( Row direction)
    justifyContent: 'center',   // ให้ child align ตามทิศของ container
  },

});

