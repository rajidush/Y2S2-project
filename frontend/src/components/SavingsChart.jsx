import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const SavingsChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ], // Months on the X-axis
    datasets: [
      {
        label: "Week 1",
        data: [100, 120, 140, 130, 150, 170, 180, 200, 220, 210, 230, 240],
        backgroundColor: "#595959",
        
      },
      {
        label: "Week 2",
        data: [110, 130, 150, 140, 160, 180, 190, 210, 230, 220, 240, 250],
        backgroundColor: "#AAC638",
      },
      {
        label: "Week 3",
        data: [90, 110, 130, 120, 140, 160, 170, 190, 210, 200, 220, 230],
        backgroundColor: "#C8C8C8",
      },
      {
        label: "Week 4",
        data: [80, 100, 120, 110, 130, 150, 160, 180, 200, 190, 210, 220],
        backgroundColor: "#F8CD68",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Places the legend at the top
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Savings (in $)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SavingsChart;
