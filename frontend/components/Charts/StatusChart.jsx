import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function StatusChart({ stats }) {

  if (!stats) return null;

  const data = {

    labels: [
      "New",
      "Contacted",
      "Converted",
    ],

    datasets: [
      {
        label: "Leads",
        data: [
          stats.new,
          stats.contacted,
          stats.converted,
        ],

        backgroundColor: [
          "#52d500",
          "#ffae00",
          "#00a970",
        ],
        borderRadius: 8,
        maxBarThickness: 46,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-heading">
        <span className="eyebrow">Qualification</span>
        <h3>Lead status</h3>
      </div>

      <Bar data={data} options={options} />
    </div>
  );
}
