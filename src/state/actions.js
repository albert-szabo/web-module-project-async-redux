import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (users) => {
    return ({type: FETCH_SUCCESS, payload: users});
}

export const getUsers = () => {
    return(dispatch => {
        dispatch(fetchStart());
        axios.get('https://randomuser.me/api/?results=25')
          .then(response => {
            dispatch(fetchSuccess(response.data.results));
          })
          .catch(error => console.error({error}));
    })
}
