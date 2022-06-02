import React, { useEffect } from 'react';
import './App.css';

import UserList from './components/UserList';

import { connect } from 'react-redux';
import { fetchStart, fetchSuccess } from './state/actions';

import axios from 'axios';

function App(props) {
  const { loading, error } = props;

  useEffect(() => {
    props.fetchStart();
    axios.get('https://randomuser.me/api/?results=25')
      .then(response => {
        props.fetchSuccess(response.data.results);
      })
      .catch(error => console.error({error}));
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

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(App);
