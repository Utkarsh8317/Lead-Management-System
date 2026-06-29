import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function SourceChart({ stats }) {

  if (!stats) return null;

  const data = {
    labels: [
      "Website",
      "Meta Ads",
      "Google Ads",
    ],

    datasets: [
      {
        data: [
          stats.website,
          stats.meta,
          stats.google,
        ],

        backgroundColor: [
          "#52d500",
          "#ffae00",
          "#00a970",
        ],
        borderColor: "#ffffff",
        borderWidth: 4,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    cutout: "68%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-heading">
        <span className="eyebrow">Acquisition</span>
        <h3>Lead sources</h3>
      </div>

      <Doughnut data={data} options={options} />
    </div>
  );
}
