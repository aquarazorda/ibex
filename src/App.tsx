import React from 'react';
import { Login } from './components/login/Login';
import { Filter } from './components/filter/Filter';
import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="filter" element={<Filter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
