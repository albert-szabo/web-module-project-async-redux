
import { data1 } from '../data/testUsers';
import { data2 } from '../data/testUsers';

// import { FETCH_USERS } from './actions';

const initialState = {
    users: data2
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case FETCH_USERS:
        //     return {
        //         ...state,
        //         users: action.payload
        //     }
        default:
            return (state);
    }
}

export default reducer;