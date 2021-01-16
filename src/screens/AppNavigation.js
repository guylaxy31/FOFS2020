import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Home/Home'

import LoginHome from '../LoginPath/LoginHome'
import LoginForCustomer from '../LoginPath/LoginForCustomer'
import CustomerFoodID from '../LoginPath/CustomerFoodID'
import LoginForRestaurant from '../LoginPath/LoginForRestaurant'

import RegisterForCustomer from '../RegisterPath/RegisterForCustomer'
import RegisterForRestaurant from '../RegisterPath/RegisterForRestaurant'

import RestaurantHome from '../RestaurantPath/RestaurantHome'
import AnalyticMain from '../RestaurantPath/AnalyticMain'
import MenuList from '../RestaurantPath/MenuList'
import OrderMain from '../RestaurantPath/OrderMain'
import HistoryMain from '../RestaurantPath/HistoryMain'
import HistoryList from '../RestaurantPath/HistoryList'

import AdminHome from '../AdminPath/AdminHome'
import RequestMain from '../AdminPath/RequestMain'
import RequestCheck from '../AdminPath/RequestCheck'
import ListMain from '../AdminPath/ListMain'
import ListCheck from '../AdminPath/ListCheck'

const screens = {
    Homescreen: {
        screen: Home,
        navigationOptions: {
            title: 'หน้าหลัก',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    LoginHome: {
        screen: LoginHome,
        navigationOptions: {
            title: 'เลือกการใช้งาน',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }

        },
    },
    LoginForCustomer: {
        screen: LoginForCustomer,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    CustomerFoodID: {
        screen: CustomerFoodID,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    RegisterForCustomer: {
        screen: RegisterForCustomer,
        navigationOptions: {
            title: 'สร้างบัญชี',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            },

        }

    },
    LoginForRestaurant: {
        screen: LoginForRestaurant,
        navigationOptions: {
            title: 'สถิติร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    RegisterForRestaurant: {
        screen: RegisterForRestaurant,
        navigationOptions: {
            title: 'สร้างบัญชีร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    RestaurantHome: {
        screen: RestaurantHome,
        navigationOptions: {
            title: 'จัดการร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    AnalyticMain: {
        screen: AnalyticMain,
        navigationOptions: {
            title: 'สถิติร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    MenuList: {
        screen: MenuList,
        navigationOptions: {
            title: 'รายการอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    OrderMain: {
        screen: OrderMain,
        navigationOptions: {
            title: 'รายการสั่งอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    HistoryMain: {
        screen: HistoryMain,
        navigationOptions: {
            title: 'ประวัติการสั่งอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    HistoryList: {
        screen: HistoryList,
        navigationOptions: {
            title: 'ประวัติการสั่งอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    AdminHome: {
        screen: AdminHome,
        navigationOptions: {
            title: 'จัดการระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },
    RequestMain: {
        screen: RequestMain,
        navigationOptions: {
            title: 'รายการร้านอาหารขอเข้าร่วม',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },
    RequestCheck: {
        screen: RequestCheck,
        navigationOptions: {
            title: 'ตรวจสอบร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    ListMain: {
        screen: ListMain,
        navigationOptions: {
            title: 'ร้านอาหารในระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },

    ListCheck: {
        screen: ListCheck,
        navigationOptions: {
            title: 'จัดการแก้ไขร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }

}

const Homestack = createStackNavigator(screens, { initialRouteName: 'OrderMain' });
export default createAppContainer(Homestack);





