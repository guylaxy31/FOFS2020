import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Home/Home'

import LoginHome from '../LoginPath/LoginHome'
import LoginForCustomer from '../LoginPath/LoginForCustomer'
import CustomerFoodID from '../LoginPath/CustomerFoodID'
import LoginForRestaurant from '../LoginPath/LoginForRestaurant'

import RegisterForCustomer from '../RegisterPath/RegisterForCustomer'
import RegisterForRestaurant from '../RegisterPath/RegisterForRestaurant'

import RestaurantAnalyticContainer from '../Analytics/RestaurantAnalyticContainer'

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

const Homestack = createStackNavigator(screens, { initialRouteName: 'Homescreen' });
export default createAppContainer(Homestack);





