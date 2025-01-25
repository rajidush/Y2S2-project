import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const WeeklyEnergyChart = () => {
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], // Days of the week
    datasets: [
      {
        label: "Week 1",
        data: [30, 35, 35, 40, 42, 50, 20],
        borderColor: "#805ad5", // Purple border for smoother appearance
        backgroundColor: "rgba(128, 90, 213, 0.2)", // Light purple fill
        fill: true, // Enable area under the line
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "#805ad5",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 5,
      },
      {
        label: "Week 2",
        data: [25, 50, 45, 35, 30, 40, 55],
        borderColor: "#B771E5", // Green border
        backgroundColor: "rgba(170, 198, 56, 0.2)", // Light green fill
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#B771E5",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 5,
      },
      {
        label: "Week 3",
        data: [40, 45, 40, 30, 25, 30, 45],
        borderColor: "#C8C8C8", // Gray border
        backgroundColor: "rgba(200, 200, 200, 0.2)", // Light gray fill
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#C8C8C8",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 5,
      },
      {
        label: "Week 4",
        data: [15, 25, 20, 30, 35, 40, 45],
        borderColor: "#AEEA94", // Yellow border
        backgroundColor: "rgba(248, 205, 104, 0.2)", // Light yellow fill
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#AEEA94",
        pointBorderColor: "#ffffff",
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend for a cleaner look
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides vertical grid lines
        },
        ticks: {
          color: "#ffffff", // White labels
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Semi-transparent grid lines
        },
        ticks: {
          color: "#ffffff", // White labels
        },
        title: {
          display: false, // Removes Y-axis title
        },
      },
    },
  };

  return (
    <div className="bg-transparent text-white rounded-lg p-4 w-full relative">
      {/* Card Header */}
      <div
        className="absolute top-0 left-0 right-0 flex justify-center items-center"
        style={{ height: "50px" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {data.datasets.map((dataset, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "15px",
              }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: dataset.borderColor,
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              ></div>
              <span>{dataset.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Chart */}
      <div style={{ paddingTop: "50px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyEnergyChart;
