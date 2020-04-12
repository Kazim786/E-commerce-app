const INITIAL_STATE = {
    currentUser: null
}
//IF STATE IS EVER UNDEFINED IT'LL USE INITIAL STATE AS ITS VALUE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload
            }

        default:
            return state;

    }
} 
export default userReducer;