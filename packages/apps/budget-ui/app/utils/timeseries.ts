import { ChartDatapoint, Timeseries } from "~/types";

export function toChartDatapoints(timeseries: Timeseries): ChartDatapoint[] {
  return timeseries.map(({ date, value }) => {
    return {
      x: date,
      y: value,
    } as ChartDatapoint;
  });
}
