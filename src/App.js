import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import UserList from './components/UserList';

function App(props) {
  const { users } = props;

  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>
      <UserList users={users} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(App);