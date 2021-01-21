import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from 'react-navigation';
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

const Stack = createStackNavigator();



const AppNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MenuAdd">
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
                <Stack.Screen name="MenuAdd"
                    component={MenuAdd}
                    option={{
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


// const screens = {
//     Homescreen: {
//         screen: Home,
//         navigationOptions: {
//             title: 'หน้าหลัก',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         },
//     },
//     LoginHome: {
//         screen: LoginHome,
//         navigationOptions: {
//             title: 'เลือกการใช้งาน',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }

//         },
//     },
//     LoginForCustomer: {
//         screen: LoginForCustomer,
//         navigationOptions: {
//             title: 'เข้าสู่ระบบ',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         },
//     },
//     CustomerFoodID: {
//         screen: CustomerFoodID,
//         navigationOptions: {
//             title: 'เข้าสู่ระบบ',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         },
//     },
//     RegisterForCustomer: {
//         screen: RegisterForCustomer,
//         navigationOptions: {
//             title: 'สร้างบัญชี',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             },

//         }

//     },

//     FoodMenuMain: {
//         screen: FoodMenuMain,
//         navigationOptions: {
//             title: 'เลือกรายการอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     FoodMenuCustom: {
//         screen: FoodMenuCustom,
//         navigationOptions: {
//             title: 'แก้ไขเมนูอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     FoodMenuConfirm: {
//         screen: FoodMenuConfirm,
//         navigationOptions: {
//             title: 'ยืนยันรายการอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     FoodStatus: {
//         screen: FoodStatus,
//         navigationOptions: {
//             title: 'สถานะการสั่งอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     LoginForRestaurant: {
//         screen: LoginForRestaurant,
//         navigationOptions: {
//             title: 'สถิติร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         },
//     },
//     RegisterForRestaurant: {
//         screen: RegisterForRestaurant,
//         navigationOptions: {
//             title: 'สร้างบัญชีร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     RestaurantHome: {
//         screen: RestaurantHome,
//         navigationOptions: {
//             title: 'จัดการร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     AnalyticMain: {
//         screen: AnalyticMain,
//         navigationOptions: {
//             title: 'สถิติร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     MenuList: {
//         screen: MenuList,
//         navigationOptions: {
//             title: 'รายการอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     OrderMain: {
//         screen: OrderMain,
//         navigationOptions: {
//             title: 'รายการสั่งอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     HistoryMain: {
//         screen: HistoryMain,
//         navigationOptions: {
//             title: 'ประวัติการสั่งอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     HistoryList: {
//         screen: HistoryList,
//         navigationOptions: {
//             title: 'ประวัติการสั่งอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     AdminHome: {
//         screen: AdminHome,
//         navigationOptions: {
//             title: 'จัดการระบบ',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },
//     RequestMain: {
//         screen: RequestMain,
//         navigationOptions: {
//             title: 'รายการร้านอาหารขอเข้าร่วม',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },
//     RequestCheck: {
//         screen: RequestCheck,
//         navigationOptions: {
//             title: 'ตรวจสอบร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     ListMain: {
//         screen: ListMain,
//         navigationOptions: {
//             title: 'ร้านอาหารในระบบ',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     },

//     ListCheck: {
//         screen: ListCheck,
//         navigationOptions: {
//             title: 'จัดการแก้ไขร้านอาหาร',
//             headerTitleStyle: {
//                 fontFamily: 'pr-reg',
//                 fontSize: 16,
//                 textAlign: 'center',
//             }
//         }
//     }

// }


// const Homestack = createStackNavigator(screens, { initialRouteName: 'Homescreen' });
// export default createAppContainer(Homestack);



export default AppNavigation;


