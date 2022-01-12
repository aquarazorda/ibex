import React from 'react';
import { Login } from './components/login/Login';
import { Filter } from './components/filter/Filter';
import { Routes, Route } from "react-router-dom";
import { Table } from './components/table/Table';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="filter" element={<Filter />} />
          <Route path="table" element={<Table />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
