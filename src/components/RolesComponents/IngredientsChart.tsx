
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

// import { Line } from 'react-chartjs-2'

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = {
//   labels: ["", '8 აპრილი', ""],
//   datasets: [
//     {
//       label: 'რძე',
//       data: [null, 200, null],
//       tension: 0.4,
//     },
//     {
//       label: 'მარწყვი',
//       data: [null, 10, null],
//       tension: 0.4,
//     },
//     {
//       label: 'შაქარი',
//       data: [null, 50, null],
//       tension: 0.4,
//     },
//   ],
// };

// const options = {
//   plugins: {
//     legend: {
//       position: 'top' as const,
//       labels: {
//         boxWidth: 0, 
//         usePointStyle: false, 
//         color: 'rgba(255,255,255,0.8)', 
//         font: {
//           size: 11,
//         }
//       },
//     },
//   },
//   scales: {
//     x: {
//       ticks: {
//         color: 'rgba(240,240,240,1)',
//       },
//       grid: {
//         color: 'rgba(240,240,240,1)',
//       },
//     },
//     y: {
//       ticks: {
//         color: 'rgba(240,240,240,1)',
//       },
//       grid: {
//         color: 'rgba(240,240,240,1)',
//       },
//     },
//   },
// }

export default function IngredientsChart() {
    return (
        <div className="flex flex-col gap-[8px] mt-[-24px]">

            <div className="w-[422px] h-[318px] rounded-[6px] flex items-center bg-[rgba(0,21,25,1)]">
                <div className="bg-[rgba(0,21,25,1)]">
                    {/* <Line data={data} options={options} /> */}
                </div>
            </div>
        </div>)
}
