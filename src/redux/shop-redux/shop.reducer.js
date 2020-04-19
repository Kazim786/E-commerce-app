import SHOP_DATA from './shop.data'

const INITIAL_STATE = {
    collections: SHOP_DATA
};
//takes current state and action as arguments and returns the 'new state'
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer