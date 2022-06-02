
import { data1 } from '../data/testUsers';
import { data2 } from '../data/testUsers';

import { FETCH_START, FETCH_SUCCESS } from './actions';

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
        case FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: ''
            }
        default:
            return (state);
    }
}

export default reducer;