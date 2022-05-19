export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = (users) => {
    return ({type: FETCH_USERS, payload: users});
}