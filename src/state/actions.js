export const FETCH_START = 'FETCH_START';
export const FETCH_USERS = 'FETCH_USERS';

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchUsers = (users) => {
    return ({type: FETCH_USERS, payload: users});
}