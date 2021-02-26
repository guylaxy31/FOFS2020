import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import resReducer from './reducer/resreducer';

const rootReducer = combineReducers({
    restaurant: resReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);