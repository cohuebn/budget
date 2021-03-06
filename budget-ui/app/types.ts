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
