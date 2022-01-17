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
            position: 'right' as const,
        },
    },
};

const change = (e: any) => {
    console.log(e)
}
export function BarChart() {
    let loading = true;
    const [data, setData] = useState([]);
     
    useEffect(() => {
        const fetchData = Https.get('posts_aggregated', {
            "post_request_params": {
              "time_interval_from": "2021-01-16T17:23:05.925Z",
              "time_interval_to": "2021-07-16T17:23:05.925Z",
            },
            "axisX": "topics",
            // "days": 30
         });
         
        fetchData.then(_data => {
            // data1 = _data.right;
            setData(E.getOrElse(() => [])(_data));
            let labels = _data["right"].map(i => i.topics.title)
            let data1 = {
                labels,
                datasets: [
                    {
                        label: 'Topics',
                        data: _data["right"].map(i => i.count),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    // {
                    //     label: 'Dataset 2',
                    //     data: labels.map(() => Math.random() * 100),
                    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    // },
                ],
            }; 
            loading = false
            console.log(_data["right"].map(i => i.topics.title));
            console.log(loading);
        });

    }, []);

    if (loading) {
        return (
            <div></div>
        )
        
    }
    return (
        <div>
            <Typeahead
                // multiple
                id="Axis-X"
                onChange={change}
                options={filterData.data.map(d => d.label)}
                placeholder="Axis X"
            // selected={value}
            />
            
            <Bar options={options} data={data1} />
                
        </div>
    );
}
