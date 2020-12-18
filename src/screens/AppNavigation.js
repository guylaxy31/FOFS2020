import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Home/Home'
import LoginMode from '../Login/LoginMode'
import CustomerWay from '../Login/CustomerWay'
import CustomerFoodID from '../Login/CustomerFoodID'
import RegisterCustomerContainer from '../Register/RegisterCustomerContainer'

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
    }




}

const Homestack = createStackNavigator(screens, { initialRouteName: 'LoginModescreen' });
export default createAppContainer(Homestack);





