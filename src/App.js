import React from 'react';
import './App.css';

import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Random User Generator Display Project</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;