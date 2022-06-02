import React from "react";

const User = (props) => {
    const { user } = props;

    return (<div id='user'>
        <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
        <h4>{user.email}</h4>
        <h5>Username: {user.login.username}</h5>
        <h5>Password: {user.login.password}</h5>
        <h6>Age: {user.dob.age}</h6>
        <p>Phone: {user.phone}</p>
        <p>Cell: {user.cell}</p>
        <img src={user.picture.large}/>
    </div>);
}

export default User;