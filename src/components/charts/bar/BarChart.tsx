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
    layout:{
        padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 200
        }
    }
};

const change = (e: any) => {
    console.log(e)
}

export function BarChart() {
// const BarChart = () => {
    let labels = [1, 2, 3, 4]
    let data_: any = {
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
            let kkk = E.getOrElse(() => [{topics:{title:0},count:0}])(_data)
            let labels = kkk.map(i => i.topics.title)
            data_ = {
                labels,
                datasets: [
                    {
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        // borderColor: this.gradient,
                        pointBorderColor: '#111',
                        pointBackgroundColor: '#ff4000',
                        pointBorderWidth: 2,
        //   backgroundColor: 'rgba(52, 152, 219, 0.75)',
                        label: 'Topics',
                        data: kkk.map(i => i.count),
                        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }; 
            setData(data_);
            setFetching(false)
        });

    }, []);

    if (fetching) {
        return (
            <div>Loding</div>
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
            <div className="chart">
                <Bar options={options} data={data} />
            </div>
                
        </div>
    );
}

// export default BarChart