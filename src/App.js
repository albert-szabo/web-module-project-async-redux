import React, { useEffect } from 'react';
import './App.css';

import UserList from './components/UserList';

import { connect } from 'react-redux';
// import { fetchUsers } from './state/actions';

function App(props) {
  const { users } = props;
  
  // useEffect(() => {
  //   props.fetchUsers();
  // }, [])

  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>
      <UserList users={users}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);