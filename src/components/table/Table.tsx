import React, { useMemo } from 'react';
import { POSTS_ } from '../../data/data';

import { useTable } from 'react-table';
import cols from '../../data/columns.json';

export function Table() {

  // This needs to be passed as parameters TODO
  // TODO get rid of 'any' type here
  const columns: any = useMemo(() => cols.data, []);

  // This one aswell
  const data = POSTS_.map(item => ({
    date: item["Post Created Date"],
    type: item["Type"],
    description: item["Description"],
    likes: item["Likes"],
    // "Dislikes": item["Dislikes"],
    shares: item["Shares"]
  }));

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