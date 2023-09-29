import { ChartOptions, ChartType } from "chart.js";

import { DashboardPanel } from "./dashboard-panel";
import { useChartCanvas } from "./use-chart";

import { Timeseries } from "~/types";
import { colors } from "~/theme";
import { toChartDatapoints } from "~/utils/timeseries";

type SpendingChartProps = {
  income: Timeseries;
  spending: {
    [category: string]: Timeseries;
  };
};

function asLineSeries(label: string, timeseries: Timeseries, color: string) {
  return {
    label,
    borderColor: color,
    backgroundColor: color,
    type: "line" as ChartType,
    data: toChartDatapoints(timeseries),
  };
}

function asBarSeries(label: string, timeseries: Timeseries, color: string) {
  return {
    label,
    borderColor: color,
    backgroundColor: color,
    type: "bar" as ChartType,
    data: toChartDatapoints(timeseries),
    stack: "Spending",
  };
}

function asChartData({ income, spending }: SpendingChartProps) {
  const incomeSeries = asLineSeries("Income", income, colors.charts.series[0]);

  const spendingSeries = Object.entries(spending).map(([category, timeseries], index) => {
    return asBarSeries(category, timeseries, colors.charts.series[index + 1]);
  });
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
  const chartCanvas = useChartCanvas({
    config: {
      data: asChartData(props),
      options,
    },
    height: "300px",
  });
  return <DashboardPanel title="Income & spending history" children={chartCanvas} />;
}
