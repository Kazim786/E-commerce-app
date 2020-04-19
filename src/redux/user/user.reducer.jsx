import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

//IF STATE IS EVER UNDEFINED IT'LL USE INITIAL STATE AS ITS VALUE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }
//the action is to set current user. So the switch returns the state in a spread operator
// but it sets the currentUser to action.payload (which is the value of the signed in user)
        default:
            return state;

    }
} 
export default userReducer;