import React, { useEffect, useMemo, useState } from 'react';
import { POSTS_ } from '../../data/data';

import { useTable } from 'react-table';
import cols from '../../data/columns.json';
import { Https } from '../../shared/Http';
import * as E from "fp-ts/lib/Either";

export function Table() {
  const [data, setData] = useState([]);

  // This needs to be passed as parameters TODO
  // TODO get rid of 'any' type here
  const columns: any = useMemo(() => cols.data, []);
  const fetchData = Https.get('posts', {
    "time_interval_from": "2021-01-16T17:23:05.925Z",
    "time_interval_to": "2021-07-16T17:23:05.925Z",
    "count": 10
  });

  useEffect(() => {
    fetchData.then((maybeData) => setData(E.getOrElse(() => [])(maybeData)));
    console.log(data);
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data
  });

  return (
    <div>
      <h1>Table</h1>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i: number) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}