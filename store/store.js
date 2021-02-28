import {createStore , applyMiddleware , combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loginStatus, consenseReducer, genderSelectionReducer, orderlistReducer } from '../src/Reducers/Reducers'

import resReducer from './reducer/resreducer' ;

const rootReducer = combineReducers({
    loginStatus,
    restaurant: resReducer,
    consense: consenseReducer, 
    gender: genderSelectionReducer, 
    orderlist: orderlistReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);