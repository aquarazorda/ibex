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
// const BarChart = () => {
    let labels = [1, 2, 3, 4]
    let data_ = {
        labels,
        datasets: [
            {
                label: 'Topics',
                data: [2, 2, 2, 2],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const [data, setData] = useState(data_);
    const [fetching, setFetching] = useState(true);
     
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

            debugger
            // let labels = _data["right"].map(i => i.topics.title)
            labels = [18, 2, 3, 4]
            data_ = {
                labels,
                datasets: [
                    {
                        label: 'Topics',
                        // data: _data["right"].map(i => i.count),
                        data: [2, 2, 2, 2],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }; 
            console.log(_data)//["right"].map(i => i.topics.title));
            // let k = _data
            setFetching(true)

            console.log(fetching, _data);
            // setData(E.getOrElse(() => [])(_data));
            // if(_data])
            setData(data_);
            setFetching(false)
            console.log(fetching, _data);
        });

    }, []);

    if (fetching) {
        return (
            <div>jjjjjj</div>
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
            
            <Bar options={options} data={data} />
                
        </div>
    );
}

// export default BarChart