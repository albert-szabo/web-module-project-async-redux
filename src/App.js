import React from 'react';
import './App.css';

import UserRequestForm from './components/UserRequestForm';
import UserList from './components/UserList';

import { connect } from 'react-redux';
import { getUsers } from './state/actions';

function App(props) {
  const { loading, error } = props;

  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>

      {
        (error !== '') && <h3>{error}</h3>
      }

      <UserRequestForm />

      {
        loading ? <h3>Loading... Please wait.</h3> : <UserList />
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

export default connect(mapStateToProps)(App);
