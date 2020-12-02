import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './src/Home/Home'; // หน้าหลักของแอปพลิเคชัน
// R E D U X
import { createStore, combineReducers, ApplyMiddleware, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { userReducer, employeeReducer, loginStatus } from './src/Reducers/Reducers'

const mylogger = (store) => (next) => (action) => {
  console.log("Log Action", action);
  next(action);
}

const store = createStore(combineReducers({ user: userReducer, emp: employeeReducer, loginStatus }, {}, applyMiddleware(mylogger)))

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

