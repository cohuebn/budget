import { useEffect, useState } from "react";
import "chartjs-adapter-date-fns";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
  ChartType,
  Colors,
  DefaultDataPoint,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";

import { colors } from "~/theme";

type UseChartProps<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> = {
  config:
    | ChartConfiguration<TType, TData, TLabel>
    | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>;
  height: string;
};

// Global registration of commonly used chart components/defaults
Chart.register(
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
Chart.defaults.borderColor = colors.charts.borderColor;
Chart.defaults.color = colors.text;

export function useChartCanvas({ config, height }: UseChartProps) {
  const [chartElement, setChartElement] = useState<HTMLCanvasElement | null>(
    null
  );

  useEffect(() => {
    if (chartElement) {
      // eslint-disable-next-line no-new
      new Chart(chartElement, config);
    }
  }, [chartElement, config, height]);

  return (
    <canvas ref={(element) => setChartElement(element)} style={{ height }} />
  );
}
