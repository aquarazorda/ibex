import React, { useEffect, useMemo, useState } from 'react';
import { POSTS_ } from '../../data/data';

import { useTable } from 'react-table';
import cols from '../../data/columns.json';
import { Https } from '../../shared/Http';
import * as E from "fp-ts/lib/Either";

export function Table() {
  const [data, setData] = useState([]);
  const columns: any = useMemo(() => cols.data, []);

  useEffect(() => {
    const fetchData = Https.get('posts', {
      "time_interval_from": "2021-01-16T17:23:05.925Z",
      "time_interval_to": "2021-07-16T17:23:05.925Z",
      "count": 10
    });

    fetchData.then(_data => {
      setData(E.getOrElse(() => [])(_data));
      console.log(_data);
    });

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
    <table {...getTableProps()} className="table">
      <thead className="table--header">
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table--row">
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()} className="table--col">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      {/* <div >
        <div className="table--row">
          <div className="table--col"><span>date</span></div>
          <div className="table--col"><span>platform</span></div>
          <div className="table--col"><span>Channel</span></div>
          <div className="table--col"><span>Titles</span></div>
          <div className="table--col"><i className="icn icn--like"></i></div>
          <div className="table--col"><i className="icn icn--dislike"></i></div>
          <div className="table--col"><i className="icn icn--share"></i></div>
          <div className="table--col"><i className="icn icn--comment"></i></div>
          <div className="table--col"><i className="icn icn--toxicity"></i></div>
        </div>
      </div> */}
      <div className="table--body">
        <div className="table--item">
          <div className="table--row">
            <div className="table--col"><span className="font--xs">12/03/2021</span></div>
            <div className="table--col"><i className="icn icn--facebook"></i></div>
            <div className="table--col">
              <div className="flex">
                <div className="channgel-logo"><img src="" alt="" /></div><span>რადიო თავისუფლება</span>
              </div>
            </div>
            <div className="table--col"> <span>"საჭიროა ისიც გავარკვიოთ, რა სარგებლობას აძლევს რუსეთს აფხაზეთის დამოუკიდებლობის აღიარება" - სტატია, რომელიც აუცილებლად უნდა წაიკითხოთ! 👇</span></div>
            <div className="table--col"> <span>2000</span></div>
            <div className="table--col"> <span>500</span></div>
            <div className="table--col"> <span>256</span></div>
            <div className="table--col"> <span>3755</span></div>
            <div className="table--col"> <span>95</span></div>
          </div>
          <div className="table--extra-row"><i className="icn icn--type-video"></i>
            <div className="table--item-tags">
              <div className="flex"><span className="font-xs mr-15">Tags</span>
                <div className="flex"><span className="badge bg-secondary">tag 1</span><span className="badge bg-secondary">tag 2</span><span className="badge bg-secondary">tag 3</span></div>
              </div>
            </div>
            <div className="table--item-tags">
              <div className="flex"><span className="font-xs mr-15">Person</span>
                <div className="flex"><span className="badge bg-secondary">Mikheil saakashvili</span><span className="badge bg-secondary">Giorgi gakharia</span><span className="badge bg-secondary">tag 3</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="table--item">
          <div className="table--row">
            <div className="table--col"><span className="font--xs">12/03/2021</span></div>
            <div className="table--col"><i className="icn icn--facebook"></i></div>
            <div className="table--col">
              <div className="flex">
                <div className="channgel-logo"><img src="" alt="" /></div><span className="font--xs">რადიო თავისუფლება</span>
              </div>
            </div>
            <div className="table--col"> <span>"საჭიროა ისიც გავარკვიოთ, რა სარგებლობას აძლევს რუსეთს აფხაზეთის დამოუკიდებლობის აღიარება" - სტატია, რომელიც აუცილებლად უნდა წაიკითხოთ! 👇</span></div>
            <div className="table--col"> <span>2000</span></div>
            <div className="table--col"> <span>500</span></div>
            <div className="table--col"> <span>256</span></div>
            <div className="table--col"> <span>3755</span></div>
            <div className="table--col"> <span>95</span></div>
          </div>
          <div className="table--extra-row">
            <div className="table--item-type"><i className="icn icn--type-text"></i></div>
            <div className="table--item-tags">
              <div className="flex"><span className="font-xs mr-15">Tags</span>
                <div className="flex"><span className="badge bg-secondary">tag 1</span><span className="badge bg-secondary">tag 2</span><span className="badge bg-secondary">tag 3</span></div>
              </div>
            </div>
            <div className="table--item-tags">
              <div className="flex"><span className="font-xs mr-15">Person</span>
                <div className="flex"><span className="badge bg-secondary">Mikheil saakashvili</span><span className="badge bg-secondary">Giorgi gakharia</span><span className="badge bg-secondary">tag 3</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </table>
  )
  // return (
  //   <div>
  //     <h1>Table</h1>

  //     <table {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map((headerGroup: any) => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((column: any) => (
  //               <th {...column.getHeaderProps()}>{column.render('Header')}</th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map((row: any, i: number) => {
  //           prepareRow(row)
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map((cell: any) => {
  //                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
  //               })}
  //             </tr>
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );
}