import { Routes, Route } from "react-router-dom";

import { Filter } from '../filter/Filter';
import { Table } from '../table/Table';
import { Bar } from '../charts/bar/Bar';
import { Graph } from '../charts/graph/Graph';
import { Line } from '../charts/line/Line';
import { Map } from '../charts/map/Map';
import { Bubble } from '../charts/bubble/Bubble';

export function Results() {
  return (
      <div>
        <Filter />
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="bar" element={<Bar />} />
            <Route path="graph" element={<Graph />} />
            <Route path="line" element={<Line />} />
            <Route path="map" element={<Map />} />
            <Route path="bubble" element={<Bubble />} />
        </Routes>
      </div>
  );
}
