import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../state/actions';

const UserRequestForm = (props) => {
    const [numberOfUsersRequested, setNumberOfUsersRequested] = useState('');

    const handleChange = (event) => {
        setNumberOfUsersRequested(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.getUsers(numberOfUsersRequested);
        setNumberOfUsersRequested('');
    }

    const isDisabled = () => {
        if (numberOfUsersRequested.trim().length >= 1 && numberOfUsersRequested.trim().length < 5 && Number.parseFloat(numberOfUsersRequested) > 0 && Number.isInteger(Number.parseFloat(numberOfUsersRequested))) {
            return false
        } else {
            return true
        }
    }

    return (
        <>
            <h4>How many random users would you like?</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={numberOfUsersRequested} type='number'/>
                <button disabled={isDisabled()}>Get Users</button>
            </form>
        </>
    )
}

export default connect(null, { getUsers })(UserRequestForm);