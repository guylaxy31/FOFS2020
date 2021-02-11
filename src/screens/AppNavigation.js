import * as React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home/Home'
import ProfileSetting from '../Home/ProfileSetting'
import Tutorial from '../Home/Tutorial'
import CustomerReport from '../Home/CustomerReport'
import Contact from '../Home/Contact'

import LoginHome from '../LoginPath/LoginHome'
import ForgotPassword from '../LoginPath/ForgotPassword'

import FoodMenuMain from '../CustomerPath/FoodMenuMain'
import FoodMenuCustom from '../CustomerPath/FoodMenuCustom'
import FoodMenuConfirm from '../CustomerPath/FoodMenuConfirm'
import FoodStatus from '../CustomerPath/FoodStatus'
import FoodHistory from '../CustomerPath/FoodHistory'
import FoodHistoryDetail from '../CustomerPath/FoodHistoryDetail'

import RegisterHome from '../RegisterPath/RegisterHome'
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

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DrawerContent } from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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
            <Stack.Screen name="ProfileSetting"
                component={ProfileSetting}
                options={{
                    title: 'ตั้งค่าโปรไฟล์',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="Tutorial"
                component={Tutorial}
                options={{
                    title: 'วิธีการสั่งอาหาร',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="CustomerReport"
                component={CustomerReport}
                options={{
                    title: 'ร้องเรียนปัญหา',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="Contact"
                component={Contact}
                options={{
                    title: 'ติดต่อ',
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
            <Stack.Screen name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: 'ลืมรหัสผ่าน',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />

            <Stack.Screen name="RegisterHome"
                component={RegisterHome}
                options={{
                    title: 'เลือกประเภทบัญชี',
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
            <Stack.Screen name="FoodHistory"
                component={FoodHistory}
                options={{
                    title: 'ประวัติการสั่งออเดอร์',
                    headerTitleStyle: {
                        fontFamily: 'pr-reg',
                        fontSize: 16,
                        textAlign: 'center',
                    }
                }
                }
            />
            <Stack.Screen name="FoodHistoryDetail"
                component={FoodHistoryDetail}
                options={{
                    title: 'ดูรายละเอียด',
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

        <Tab.Navigator style={{ fontFamily: 'pr-reg' }} initialRouteName="AppNavigation" activeColor="#000" inactiveColor="#797979" barStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen name="home" component={AppNavigation} options={{ tabBarLabel: 'หน้าหลัก', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />) }} />
            <Tab.Screen name="FoodStatus" component={FoodStatus} options={{ tabBarLabel: 'สถานะออเดอร์', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="silverware" color={color} size={26} />) }} />
            <Tab.Screen name="FoodHistory" component={FoodHistory} options={{ tabBarLabel: 'ประวัติการสั่ง', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="history" color={color} size={26} />) }} />
        </Tab.Navigator>
    )
}

const DrawerTab = props => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="home" component={CustomerBottomTab} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerTab;


