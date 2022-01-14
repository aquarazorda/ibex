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
        <Filter />
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="results" element={<Results />} />
          
          
          <Filter />
            <Route path="table" element={<Table />} />
            <Route path="graph" element={<Graph />} />
            <Route path="bar" element={<Bar />} />
            <Route path="line" element={<Line />} />
            <Route path="map" element={<Map />} />
            <Route path="bubble" element={<Bubble />} />
          
          <Route path="taxonomy" element={<Taxonomy />} />
          <Route path="sources" element={<Sources />} />
          
          <Route path="post" element={<Sources />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
