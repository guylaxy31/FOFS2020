import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/Home/Home';


// R E D U X
import { createStore, combineReducers } from 'redux'
import { userReducer, employeeReducer, loginStatus } from './src/Reducers/Reducers'
import { Provider } from 'react-redux';

// N A V I G A T O R
import AppNavigation from './src/screens/AppNavigation'

const store = createStore(combineReducers({ user: userReducer, emp: employeeReducer, loginStatus }))

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    // ให้มีพื้นที่ 1 ส่วน (Default Column)
    alignSelf: 'stretch',       // ให้ child ใน container align ให้ match กับ height ของ container (Column direction)
    alignItems: 'center',       // จัดให้ container มันเองอยู่ตอนกลาง ( Row direction)
    justifyContent: 'center',   // ให้ child align ตามทิศของ container
  },

});

