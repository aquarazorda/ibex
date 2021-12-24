import React from 'react';
import { Login } from './components/login/Login';
import { Filter } from './components/filter/Filter';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Filter />
      </header>
    </div>
  );
}

export default App;
