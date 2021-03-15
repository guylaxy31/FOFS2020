import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { loginStatus, consenseReducer, genderSelectionReducer, orderlistReducer } from '../src/Reducers/Reducers'

import cartItems from './reducer/cartItem' ;

const rootReducer = combineReducers({
    cartItems : cartItems
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);