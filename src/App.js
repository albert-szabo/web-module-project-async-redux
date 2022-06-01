import React, { useEffect } from 'react';
import './App.css';

import UserList from './components/UserList';

import { connect } from 'react-redux';
import { fetchUsers } from './state/actions';

function App(props) {
  // useEffect(() => {
  //   props.fetchUsers();
  // }, [])

  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>
      <UserList />
    </div>
  );
}

export default App;

// export default connect(null, { fetchUsers })(App);