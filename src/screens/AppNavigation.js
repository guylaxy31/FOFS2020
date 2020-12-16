import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Home from '../Home/Home'
import LoginModeMain from '../Login/LoginModeMain'

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
        screen: LoginModeMain,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
            headerTitleStyle: {
                fontFamily: 'pr-reg',
                fontSize: 16,
                textAlign: 'center',
            }
        },
    },
    initialRouteName: "Homescreen"

}

const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);