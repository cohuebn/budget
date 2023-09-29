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
  BarController,
  BarElement,
  TimeUnit,
} from "chart.js";
import "chartjs-adapter-date-fns";

import { colors } from "~/theme";
import { Timeseries } from "~/types";

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
  Colors,
);
ChartJS.defaults.borderColor = colors.charts.borderColor;
ChartJS.defaults.color = colors.text;

enum ChartType {
  line = "line",
  bar = "bar",
}

export function asLineSeries(label: string, timeseries: Timeseries, color: string) {
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

export function asBarSeries(label: string, timeseries: Timeseries, color: string, stack?: string) {
  return {
    label,
    borderColor: color,
    backgroundColor: color,
    type: ChartType.bar,
    data: timeseries.map(({ date, value }) => ({
      x: date.toISOString(),
      y: value,
    })),
    stack,
  };
}

export function getChartOptions(unit: false | TimeUnit = "month"): ChartOptions {
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit,
        },
        position: "bottom",
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
}
