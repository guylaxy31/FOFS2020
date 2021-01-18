import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home'; // หน้าหลักของแอปพลิเคชันimport LoginScreen from '../Login/LoginCustOptionID';
// import ProfileScreen from '../screen/Profile';
import RegisterCusMain from '../Register/RegisterCustForm'
import LoginScreen from '../Login/LoginCustOptionID';
// import Analytic from '../screen/Analytic';
import Form from '../Register/RegisterResForm'

const Stack = createStackNavigator();

const ShopNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="analytic">
        <Stack.Screen name="form" component={Form} />
        {/* <Stack.Screen name="analytic" component={Analytic} /> */}
        <Stack.Screen name="register" component={RegisterCusMain}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ShopNavigator;
