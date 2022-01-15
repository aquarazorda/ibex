import { Routes, Route } from "react-router-dom";

import { Filter } from '../filter/Filter';
import { Table } from '../table/Table';
import { BarChart } from '../charts/bar/BarChart';
import { GraphChart } from '../charts/graph/GraphChart';
import { LineChart } from '../charts/line/LineChart';
import { MapChart } from '../charts/map/MapChart';
import { BubbleChart } from '../charts/bubble/BubbleChart';

export function Results() {
  return (
      <div>
        <Filter />
        <div className="menu">
          <a href="/results/table" >Table</a>
          <a href="/results/bar" >Bar</a>
          <a href="/results/graph" >Graph</a>
          <a href="/results/line" >Line</a>
          <a href="/results/bubble" >Bubble</a>
          <a href="/results/map" >Map</a>
        </div>
        
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="bar" element={<BarChart />} />
            <Route path="graph" element={<GraphChart />} />
            <Route path="line" element={<LineChart />} />
            <Route path="map" element={<MapChart />} />
            <Route path="bubble" element={<BubbleChart />} />
        </Routes>
      </div>
  );
}
