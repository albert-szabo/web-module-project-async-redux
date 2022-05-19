import { FETCH_USERS } from './actions';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return (state);
    }
}

export default reducer;