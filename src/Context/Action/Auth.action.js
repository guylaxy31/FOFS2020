import jwt_decode from 'jwt-decode';
import Toast from 'react-native-toast-message';
import baseURL from '../../assets/common/baseUrl';
import Toast from 'react-native-toast-message';
import { AsyncStorage } from '@react-native-community/async-storage';


export const SET_CURRENT_USER;

export const loginUser = (user, disparch) => {
    fetch(`${baseURL}user/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if(data) {
                const token = data.token;
                AsyncStorage.setItem("jwt",token);
                const decoded = jwt_decode(token);
                disparch(setCurrentUser(decoded,user));
            }else{
                logoutUser(disparch)
            }

        })
        .catch((error) => {
            Toast.show({
                topOffset: 60,
                type: "erro",
                text1:"Please  provide conrrect credentials",
                text2:""
            })
            logoutUser(disparch)
        })
};

export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = (decoded, user) => {
    return {
        type : SET_CURRENT_USER,
        payload: decoded,
        userProfile : user
    }
}