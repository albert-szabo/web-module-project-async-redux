import React, { useEffect } from 'react';
import './App.css';

import UserList from './components/UserList';

import { connect } from 'react-redux';
import { getUsers } from './state/actions';

function App(props) {
  const { loading, error, getUsers } = props;

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>

      {
        (error !== '') && <h4>{error}</h4>
      }

      {
        loading ? <h4>Loading... Please wait.</h4> : <UserList />
      }
  
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getUsers })(App);
