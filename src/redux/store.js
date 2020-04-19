import { createStore, applyMiddleware} from 'redux';
//middleware carries the actions to the root reducer
// Middleware provides a way to interact with actions that have been 
// dispatched to the store before they reach the store's reducer.
import {persistStore } from 'redux-persist';

import logger from 'redux-logger'
//catches action and console logs it for us and then it moves it along. This is a middleware

import rootReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//this'll spread all of the elements from within the middleware array as individual arguments
export const persistor = persistStore(store);
//helps retain sessions -  allowing to save the redux store in the local storage of your browser.
export default {store, persistor };