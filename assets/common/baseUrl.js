import { Platform } from "react-native";

//let baseURL = 'https://guarded-inlet-94713.herokuapp.com/api/v1/';
let baseURL = ''
 {Platform.OS == 'ios'
 ? baseURL = 'http://192.168.88.36:3000/api/v1/'
 : baseURL = 'http://loaclhost:3000/api/v1/'}

export default baseURL;