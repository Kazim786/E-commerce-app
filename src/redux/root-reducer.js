import { combineReducers } from 'redux'

//The combineReducers helper function turns an object whose values are different 
//reducing functions into a single reducing function you can pass to createStore.

import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//this brings local storage object from redux-persist. 
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory-redux/directory.reducer'
import shopReducer from './shop-redux/shop.reducer'

//composed of all the reducers

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
    //Whitelist an array that lists any reducer you want to store
    //Whitelist also defines part of the state that you want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

// allows to save the redux store in the local storage of your browser.
//now refreshing the screen will not result in deletion of data
//returns modified version of root reducer with persistance capability