import React, {Component} from 'react';
import { Text , View, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
//React Navigation Setup
import ShopNavigator from './src/navigation/ShopNavigator';
import store from './store/store'
export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
         <ShopNavigator />
      </Provider>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});