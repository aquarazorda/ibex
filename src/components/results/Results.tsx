import { Routes, Route } from "react-router-dom";

import { Filter } from '../filter/Filter';
import { Table } from '../table/Table';
import { Bar } from '../charts/bar/Bar';

export function Results() {
  return (
      <div>
        <Filter />
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="bar" element={<Bar />} />
        </Routes>
      </div>
  );
}

        // <Route path="graph" element={<Graph />} />
        // <Route path="line" element={<Line />} />
        // <Route path="map" element={<Map />} />
        // <Route path="bubble" element={<Bubble />} />