import React from 'react';
import User from './User';

import { connect } from 'react-redux';

const UserList = props => {
    const { users } = props;

    return (<div id='userList'>
        {users.map(user => {
                return (<User user={user} key={user.login.uuid}/>);
            })}
    </div>)
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);