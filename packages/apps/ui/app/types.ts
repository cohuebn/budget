export type BudgetSummaryData = {
  currentPeriod: {
    endDate: Date;
    income: number;
    expenses: number;
  };
};

export type UpcomingEventData = {
  id: string;
  date: Date;
  name: string;
  value: number;
};

export type Timeseries = Array<{ date: Date; value: number }>;

// I don't love it, but Chart.js supports string/date x-axis
// values. However the typescript definitions for Chart.js don't
// allow string/date x-axis values. Patching with an any as
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ChartDatapoint<TX = any, TY = number> = {
  x: TX;
  y: TY;
};
