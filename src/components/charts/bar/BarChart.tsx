import filterData from '../../../data/filter.json';
import { Typeahead } from 'react-bootstrap-typeahead';


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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => Math.random() * 100),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => Math.random() * 100),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const change = (e:any) => {
    console.log(e)
}
export function BarChart() {
    console.log()
    // filterData.data
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
