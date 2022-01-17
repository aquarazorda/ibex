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
          let maybeData = E.getOrElse(() => [pre_data])(_data)

          var dateTo: Date = new Date("2021-01-01T17:23:05.925Z");
          var dateFrom:Date = new Date("2021-01-25T17:23:05.925Z");
          var interval: number = dateFrom.getTime() - dateTo.getTime()
          var numberOfDays = Math.floor(interval / (24 * 60 * 60 * 1000));
          // var numberOfWeeks = Math.ceil(numberOfDays / 7);
          let intervals: any = []
          let labels = maybeData.map((i:any) => i[labelType].title)
          let datasets = labels.map((i:any) => ({
            label: i,
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }))


          for(let days = 0; days <= numberOfDays; days+=7){
              var iterrationDateFrom = new Date(dateFrom);
              iterrationDateFrom.setDate(iterrationDateFrom.getDate() + days);
              var iterrationDateTo = new Date(dateFrom);
              iterrationDateTo.setDate(iterrationDateTo.getDate() + days + 7);
              intervals.push(iterrationDateFrom.toISOString())
              datasets.forEach(dataset => {
                // dataset.data.
              })
          }


            let pre_data: any = {count:0}
            pre_data[labelType] = {title:0}
            
            // let labels = kkk.map(i => i[label].title)
            data_ = {
                intervals,
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        pointBorderColor: '#111',
                        pointBackgroundColor: '#ff4000',
                        pointBorderWidth: 2,
                        label: labelType,
                        // data: kkk.map(i => i.count),
                    },
                ],
            }; 
            // setData(data_);
            setFetching(false)
        });

    }
    
    useEffect(() => fetchAndSet('topics'), []);

    if (fetching) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <select onChange={change}>
                {   filterData.data.map(d => <option key={d.name}>{d.name}</option> )     }
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