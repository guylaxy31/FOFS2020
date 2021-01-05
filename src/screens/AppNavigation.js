import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Home/Home'
import LoginMode from '../Login/LoginMode'
import CustomerWay from '../Login/CustomerWay'
import CustomerFoodID from '../Login/CustomerFoodID'
import RegisterCustomerContainer from '../Register/RegisterCustomerContainer'
import RegisterRestaurantContainer from '../Register/RegisterRestaurantContainer'
import RestaurantAnalyticContainer from '../Analytics/RestaurantAnalyticContainer'
import RestaurantAppID from '../Login/RestaurantAppID'
import RestaurantContainer from '../RestContent/RestaurantContainer'
import AdminMainContainer from '../Admin/AdminMainContainer'
import AdminRestaurantRequest from '../Admin/AdminRestaurantRequest'
import AdminRestaurantList from '../Admin/AdminRestaurantList'
import RequestView from '../Admin/RequestView'
import ManageView from '../Admin/ManageView'
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
    LoginModescreen: {
        screen: LoginMode,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    CustomerWayscreen: {
        screen: CustomerWay,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    CustomerFoodIDscreen: {
        screen: CustomerFoodID,
        navigationOptions: {
            title: 'ล็อคอินเข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    RegisterCustomerscreen: {
        screen: RegisterCustomerContainer,
        navigationOptions: {
            title: 'สร้างบัญชี',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    RegisterRestaurantscreen: {
        screen: RegisterRestaurantContainer,
        navigationOptions: {
            title: 'สร้างบัญชีร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    },
    RestaurantAnalyticscreen: {
        screen: RestaurantAnalyticContainer,
        navigationOptions: {
            title: 'สถิติร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    }, RestaurantAppIDscreen: {
        screen: RestaurantAppID,
        navigationOptions: {
            title: 'สถิติร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    }, RestaurantContainerscreen: {
        screen: RestaurantContainer,
        navigationOptions: {
            title: 'จัดการร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }, AdminMainContainerscreen: {
        screen: AdminMainContainer,
        navigationOptions: {
            title: 'จัดการระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }
    , AdminRestaurantRequestscreen: {
        screen: AdminRestaurantRequest,
        navigationOptions: {
            title: 'รายการร้านอาหารขอเข้าร่วม',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }

    , AdminRestaurantListscreen: {
        screen: AdminRestaurantList,
        navigationOptions: {
            title: 'ร้านอาหารในระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }
    , RequestViewscreen: {
        screen: RequestView,
        navigationOptions: {
            title: 'ตรวจสอบร้านอาหาร',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        }
    }
    ,
    ManageViewscreen: {
        screen: ManageView,
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

const Homestack = createStackNavigator(screens, { initialRouteName: 'AdminMainContainerscreen' });
export default createAppContainer(Homestack);





