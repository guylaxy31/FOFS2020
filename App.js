import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Provider } from 'react-redux';

// N A V I G A T O R
import AppNavigation from './src/screens/AppNavigation'
import store from './store/store'

let customFonts = {
  'pr-light': require('./assets/fonts/Prompt-Light.ttf'),
  'pr-reg': require('./assets/fonts/Prompt-Regular.ttf'),
  'pr-bold': require('./assets/fonts/Prompt-Bold.ttf'),
};

export default class App extends Component {
  state = { fontsLoaded: false };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() { this._loadFontsAsync(); }

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
  container: { flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', },

});

