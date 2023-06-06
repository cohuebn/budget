import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  LineController,
  Title,
  Tooltip,
  TimeScale,
  Colors,
  Chart,
  BarController,
  BarElement,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";

import { DashboardPanel } from "./dashboard-panel";

import { Timeseries } from "~/types";
import { colors } from "~/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Colors
);

type SpendingChartProps = {
  income: Timeseries;
  spending: {
    [category: string]: Timeseries;
  };
};

enum ChartType {
  line = "line",
  bar = "bar",
}

function asLineSeries(label: string, timeseries: Timeseries, color: string) {
  return {
    label,
    borderColor: color,
    backgroundColor: color,
    type: ChartType.line,
    data: timeseries.map(({ date, value }) => ({
      x: date.toISOString(),
      y: value,
    })),
  };
}

function asBarSeries(label: string, timeseries: Timeseries, color: string) {
  return {
    label,
    borderColor: color,
    backgroundColor: color,
    type: ChartType.bar,
    data: timeseries.map(({ date, value }) => ({
      x: date.toISOString(),
      y: value,
    })),
    stack: "Spending",
  };
}

function asChartData({ income, spending }: SpendingChartProps) {
  const incomeSeries = asLineSeries("Income", income, colors.charts.series[0]);

  const spendingSeries = Object.entries(spending).map(
    ([category, timeseries], index) => {
      return asBarSeries(category, timeseries, colors.charts.series[index + 1]);
    }
  );
  return {
    datasets: [incomeSeries, ...spendingSeries],
  };
}

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "month",
      },
      position: "bottom",
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export function SpendingChart(props: SpendingChartProps) {
  const [chartElement, setChartElement] = useState<HTMLCanvasElement | null>(
    null
  );

  useEffect(() => {
    if (chartElement) {
      // eslint-disable-next-line no-new
      new Chart(chartElement, {
        data: asChartData(props),
        options,
      });
    }
  }, [chartElement]);

  ChartJS.defaults.borderColor = colors.charts.borderColor;
  ChartJS.defaults.color = colors.text;

  const chartCanvas = (
    <canvas
      ref={(element) => setChartElement(element)}
      style={{ height: "300px" }}
    />
  );
  return (
    <DashboardPanel title="Income & spending history" children={chartCanvas} />
  );
}
