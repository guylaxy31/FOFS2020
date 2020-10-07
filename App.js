import React from 'react';
import { Text , View, StyleSheet } from 'react-native';

import Home from './src/Home/Home'; // หน้าหลักของแอปพลิเคชัน
import LoginScreen from './src/Login/LoginCustOptionID';
import ProfileScreen from './src/screen/Profile';

//React Navigation Setup
import {  createAppContainer, createSwitchNavigator } from 'react-navigation';

const MainNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Home: {screen: Home}
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
