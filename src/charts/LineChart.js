import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data = {
        labels: ['jan', 'feb', 'mar', 'apl', 'may'],
        datasets: [
            {
                label: 'sales for 2020(millions)',
                data: [3, 5, 2, 7, 8]
            },
            {
                label: 'sales for 2019(millions)',
                data: [4, 2, 8, 12, 6]
            }
        ]
    }


    const options = {
        title: {
            display: true,
            text: 'line chart'
        }
    }

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;
