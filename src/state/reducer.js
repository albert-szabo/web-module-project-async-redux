
import { data1 } from '../data/testUsers';
import { data2 } from '../data/testUsers';

import { FETCH_START } from './actions';
import { FETCH_USERS } from './actions';

const initialState = {
    users: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
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