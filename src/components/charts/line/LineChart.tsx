import filterData from '../../../data/filter.json';
import { Typeahead } from 'react-bootstrap-typeahead';

import { useEffect, useMemo, useState } from 'react';

import { Https } from '../../../shared/Http';
import * as E from "fp-ts/lib/Either";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
    padding: {
      top: 5,
      left: 15,
      right: 15,
      bottom: 200
  }
  },
};


export function LineChart() {
// const BarChart = () => {
  let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  let data_: any = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => 8),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => 4),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

    const [data, setData] = useState(data_);
    const [fetching, setFetching] = useState(false);
    
    const change = (e: any) => {
        setFetching(true)
        fetchAndSet(e.target.value)
    }

    const fetchAndSet = (labelType: string) => {
        const fetchData = Https.get('posts_aggregated', {
            "post_request_params": {
              "time_interval_from": "2021-01-16T17:23:05.925Z",
              "time_interval_to": "2021-07-16T17:23:05.925Z",
            },
            "axisX": labelType,
            "days": 7
         });
         
        fetchData.then(_data => {
          let maybeData:any  = E.getOrElse(() => [data_])(_data)
          if(!maybeData.length){
            return
          }

          var dateFrom: Date = new Date("2021-01-16T17:23:05.925Z");
          var dateTo:Date = new Date("2021-07-16T17:23:05.925Z");
          var interval: number = (dateTo.getTime() - dateFrom.getTime())
          var numberOfDays = Math.floor(interval / (24 * 60 * 60 * 1000));
          var numberOfWeeks = Math.ceil(numberOfDays / 7);
          
          // var firstJan = new Date(1900 + dateFrom.getYear(), 0, 1)
          var firstJan = new Date(2021, 0, 1)
          var daysThisYear = (dateFrom.getTime() - firstJan.getTime()) / (24 * 60 * 60 * 1000)
          var startWeek = Math.ceil(daysThisYear/7)


          let intervals: any = ['']
          let labels: [] = maybeData.map((i:any) => i[labelType].title).filter((v: any, i: any, a: any) => a.indexOf(v) === i)


          let datasets = labels.map((i:any) => ({
            label: i,
            data: [0],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }))

          debugger
          for(let week = startWeek; startWeek <= startWeek + numberOfWeeks; startWeek++){
              var intervalDate = new Date(dateFrom);
              dateFrom.setDate(dateFrom.getDate() + week * 7);
              
              intervals.push(intervalDate.toISOString())
              
              datasets.forEach((dataset: any) => {
                
                dataset.data.push(0)
              })
            }
            debugger


            
          //   setData(data_);
          //   setFetching(false)
        });

    }
    
    useEffect(() => fetchAndSet('topics'), []);

    if (fetching) {
        return (
            <div className="results" >Loading...</div>
        )
    }
    return (
        <div className="results">
            <select onChange={change}>
                {   filterData.data.map(d => <option key={d.id}>{d.id}</option> )     }
            </select>
            
            {/* <Typeahead
                // multiple
                id="Axis-X"
                onChange={change}
                options={filterData.data.map(d => d.label)}
                placeholder="Axis X"
            // selected={value}
            /> */}
            <div className="chart">
                <Line options={options} data={data} />
            </div>
                
        </div>
    );
}

// export default BarChart