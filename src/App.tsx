import React from 'react';
import { Filter } from './components/filter/Filter';
import { Login } from './components/login/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Filter /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
