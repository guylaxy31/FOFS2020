const Stack = createStackNavigator();

const AppNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Homescreen">
                <Stack.Screen name="Homescreen" 
                    component={Home} 
                    option={{
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
                    option={{
                        title: 'หน้าหลัก',
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
                        title: 'รายการอาหาร',
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
                    option={{
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
        </NavigationContainer>
    );
};

export default AppNavigation;