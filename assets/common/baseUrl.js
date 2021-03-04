import { Platform } from "react-native";

let baseURL = '';

{Platform.OS == 'ios'
? baseURL = 'http://192.168.88.35:3000/api/v1/'
: baseURL = 'http://loaclhost:3000/api/v1/'}

export default baseURL;