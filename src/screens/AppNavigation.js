import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home'

import LoginHome from '../LoginPath/LoginHome'
import LoginForCustomer from '../LoginPath/LoginForCustomer'
import CustomerFoodID from '../LoginPath/CustomerFoodID'
import LoginForRestaurant from '../LoginPath/LoginForRestaurant'

import FoodMenuMain from '../CustomerPath/FoodMenuMain'
import FoodMenuCustom from '../CustomerPath/FoodMenuCustom'
import FoodMenuConfirm from '../CustomerPath/FoodMenuConfirm'
import FoodStatus from '../CustomerPath/FoodStatus'

import RegisterForCustomer from '../RegisterPath/RegisterForCustomer'
import RegisterForRestaurant from '../RegisterPath/RegisterForRestaurant'

import RestaurantHome from '../RestaurantPath/RestaurantHome'
import AnalyticMain from '../RestaurantPath/AnalyticMain'
import MenuList from '../RestaurantPath/MenuList'
import MenuAdd from '../RestaurantPath/MenuAdd'
import OrderMain from '../RestaurantPath/OrderMain'
import HistoryMain from '../RestaurantPath/HistoryMain'
import HistoryList from '../RestaurantPath/HistoryList'

import AdminHome from '../AdminPath/AdminHome'
import RequestMain from '../AdminPath/RequestMain'
import RequestCheck from '../AdminPath/RequestCheck'
import ListMain from '../AdminPath/ListMain'
import ListCheck from '../AdminPath/ListCheck'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AppNavigation = props => {
    return (



        <Stack.Navigator initialRouteName="Homescreen">
            <Stack.Screen name="Homescreen"
                component={Home}
                options={{
                    title: 'หน้าหลัก',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="LoginHome"
                component={LoginHome}
                options={{
                    title: 'เข้าสู่ระบบ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="LoginForCustomer"
                component={LoginForCustomer}
                options={{
                    title: 'เข้าสู่ระบบ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="CustomerFoodID"
                component={CustomerFoodID}
                options={{
                    title: 'เข้าสู่ระบบ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="RegisterForCustomer"
                component={RegisterForCustomer}
                options={{
                    title: 'สร้างบัญชี',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="FoodMenuMain"
                component={FoodMenuMain}
                options={{
                    title: 'เลือกรายการอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="FoodMenuCustom"
                component={FoodMenuCustom}
                options={{
                    title: 'แก้ไขรายการอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="FoodMenuConfirm"
                component={FoodMenuConfirm}
                options={{
                    title: 'ยืนยันรายการอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="FoodStatus"
                component={FoodStatus}
                options={{
                    title: 'สถานะรายการอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="LoginForRestaurant"
                component={LoginForRestaurant}
                options={{
                    title: 'เข้าสู่ระบบร้านอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="RegisterForRestaurant"
                component={RegisterForRestaurant}
                options={{
                    title: 'สร้างบัญชีร้านอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="RestaurantHome"
                component={RestaurantHome}
                options={{
                    title: 'จัดการร้านอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="AnalyticMain"
                component={AnalyticMain}
                options={{
                    title: 'สถิติร้านอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="MenuList"
                component={MenuList}
                options={{
                    title: 'รายการอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="MenuAdd"
                component={MenuAdd}
                options={{
                    title: 'เพิ่มเมนู',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="OrderMain"
                component={OrderMain}
                options={{
                    title: 'รายการสั่งอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="HistoryMain"
                component={HistoryMain}
                options={{
                    title: 'ประวัติการสั่งอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="HistoryList"
                component={HistoryList}
                options={{
                    title: 'ประวัติการสั่งอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="AdminHome"
                component={AdminHome}
                options={{
                    title: 'ระบบจัดการ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="RequestMain"
                component={RequestMain}
                options={{
                    title: 'รายการร้านอาหารขอเข้าร่วม',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="RequestCheck"
                component={RequestCheck}
                options={{
                    title: 'ตรวจสอบร้านอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="ListMain"
                component={ListMain}
                options={{
                    title: 'ร้านค้าในระบบ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="ListCheck"
                component={ListCheck}
                options={{
                    title: 'แก้ไขร้านค้าในระบบ',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
        </Stack.Navigator>



    );
};




const CustomerBottomTab = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="AppNavigation" activeColor="#000" inactiveColor="#000" barStyle={{ backgroundColor: '#FFF' }}>
                <Tab.Screen name="หน้าหลัก" component={AppNavigation} />
                <Tab.Screen name="สถานะออเดอร์" component={FoodStatus} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}



export default CustomerBottomTab;


