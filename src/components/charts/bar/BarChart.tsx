import filterData from '../../../data/filter.json';
import { Typeahead } from 'react-bootstrap-typeahead';

import { useEffect, useMemo, useState } from 'react';

import { Https } from '../../../shared/Http';
import * as E from "fp-ts/lib/Either";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
        legend: {
            // position: 'right' as const,
            display: false
        },
    },
    layout:{
        padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 200
        }
    }
};


export function BarChart() {
// const BarChart = () => {
    let labels = [0]
    let data_: any = {
        labels,
        datasets: [
            {
                label: 'Topics',
                data: [0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const [data, setData] = useState(data_);
    const [fetching, setFetching] = useState(true);
    
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
            // "days": 30
         });
         
        fetchData.then(_data => {
            let pre_data: any = {count:0}
            pre_data[labelType] = {title:0}
            let maybeData = E.getOrElse(() => [pre_data])(_data)
            let labels = maybeData.map(i => i[labelType].title)
            data_ = {
                labels,
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        pointBorderColor: '#111',
                        pointBackgroundColor: '#ff4000',
                        pointBorderWidth: 2,
                        label: labelType,
                        data: maybeData.map(i => i.count),
                    },
                ],
            }; 
            setData(data_);
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
                <Bar options={options} data={data} />
            </div>
                
        </div>
    );
}

// export default BarChart