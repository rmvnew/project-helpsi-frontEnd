import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface GraphicResultChartProps {
  emotion: any;
}

export const GraphicResultChart: React.FC<GraphicResultChartProps> = ({ emotion }) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);

  useEffect(() => {
    if (canvasRef.current && emotion) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        const emotions = Object.keys(emotion);
        const data = emotions.map((e) => emotion[e]);

        if (chartRef.current) {
          chartRef.current.data.labels = emotions;
          chartRef.current.data.datasets[0].data = data;
          chartRef.current.update();
        } else {
          chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: emotions,
              datasets: [
                {
                  type: "bar",
                  label: "Dados de emoções",
                  data: data,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                  ],
                  borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            },
          });
        }
      }
    }
  }, [emotion]);

  return (
    <div className="graphic-container">
      <canvas ref={canvasRef} width={900} height={900}></canvas>
    </div>
  );
};
