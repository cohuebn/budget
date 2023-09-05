import { Timeseries } from "~/types";

type AccountChartProps = {
  accounts: {
    [name: string]: Timeseries;
  };
};

export function AccountChart(props: AccountChartProps) {}
