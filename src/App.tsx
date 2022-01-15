import { Routes, Route } from "react-router-dom";

import { Login } from './components/login/Login';
import { Results } from './components/results/Results';
import { Taxonomy } from './components/taxonomy/Taxonomy';
import { Sources } from './components/sources/Sources';
import { Details } from './components/details/Details';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="results" element={<Results />} />
          <Route path="taxonomy" element={<Taxonomy />} />
          <Route path="sources" element={<Sources />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
