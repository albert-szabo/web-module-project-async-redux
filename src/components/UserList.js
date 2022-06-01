import React from 'react';
import User from './User';

const UserList = props => {
    const { users } = props;

    return (<div id='userList'>
        {users.map(user => {
                return (<User user={user} />);
            })}
    </div>)
}

export default UserList;