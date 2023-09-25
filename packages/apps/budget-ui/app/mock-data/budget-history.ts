import { sub } from "date-fns";

import { Timeseries } from "~/types";

const now = new Date();
export const mockIncomeHistory: Timeseries = [
  { date: sub(now, { months: 6 }), value: 4675.78 },
  { date: sub(now, { months: 5, days: 15 }), value: 4675.78 },
  { date: sub(now, { months: 5 }), value: 4675.78 },
  { date: sub(now, { months: 4, days: 14 }), value: 4675.78 },
  { date: sub(now, { months: 4 }), value: 4675.78 },
  { date: sub(now, { months: 3, days: 15 }), value: 4675.78 },
  { date: sub(now, { months: 3 }), value: 4675.78 },
  { date: sub(now, { months: 2, days: 16 }), value: 4675.78 },
  { date: sub(now, { months: 2 }), value: 4675.78 },
  { date: sub(now, { months: 1, days: 15 }), value: 4675.78 },
  { date: sub(now, { months: 1 }), value: 4675.78 },
];

export const mockSpendingHistory: Record<string, Timeseries> = {
  Bills: [
    { date: sub(now, { months: 6 }), value: 1500 },
    { date: sub(now, { months: 5, days: 15 }), value: 1600 },
    { date: sub(now, { months: 5 }), value: 1700 },
    { date: sub(now, { months: 4, days: 14 }), value: 1200 },
    { date: sub(now, { months: 4 }), value: 1700 },
    { date: sub(now, { months: 3, days: 15 }), value: 1234.5 },
    { date: sub(now, { months: 3 }), value: 1700 },
    { date: sub(now, { months: 2, days: 16 }), value: 1408 },
    { date: sub(now, { months: 2 }), value: 1700 },
    { date: sub(now, { months: 1, days: 15 }), value: 1100 },
    { date: sub(now, { months: 1 }), value: 1700 },
  ],
  Debts: [
    { date: sub(now, { months: 6 }), value: 1100 },
    { date: sub(now, { months: 5, days: 15 }), value: 1200 },
    { date: sub(now, { months: 5 }), value: 1100 },
    { date: sub(now, { months: 4, days: 14 }), value: 1200 },
    { date: sub(now, { months: 4 }), value: 1100 },
    { date: sub(now, { months: 3, days: 15 }), value: 1300.56 },
    { date: sub(now, { months: 3 }), value: 1400 },
    { date: sub(now, { months: 2, days: 16 }), value: 1100 },
    { date: sub(now, { months: 2 }), value: 1300 },
    { date: sub(now, { months: 1, days: 15 }), value: 1200 },
    { date: sub(now, { months: 1 }), value: 1500 },
  ],
  Entertainment: [
    { date: sub(now, { months: 6 }), value: 250 },
    { date: sub(now, { months: 5, days: 15 }), value: 300 },
    { date: sub(now, { months: 5 }), value: 500 },
    { date: sub(now, { months: 4, days: 14 }), value: 450 },
    { date: sub(now, { months: 4 }), value: 80 },
    { date: sub(now, { months: 3, days: 15 }), value: 100 },
    { date: sub(now, { months: 3 }), value: 600 },
    { date: sub(now, { months: 2, days: 16 }), value: 305.42 },
    { date: sub(now, { months: 2 }), value: 400 },
    { date: sub(now, { months: 1, days: 15 }), value: 300 },
    { date: sub(now, { months: 1 }), value: 1200 },
  ],
  Savings: [
    { date: sub(now, { months: 6 }), value: 300 },
    { date: sub(now, { months: 5, days: 15 }), value: 200 },
    { date: sub(now, { months: 5 }), value: 205.98 },
    { date: sub(now, { months: 4, days: 14 }), value: 100 },
    { date: sub(now, { months: 4 }), value: 200 },
    { date: sub(now, { months: 3, days: 15 }), value: 300 },
    { date: sub(now, { months: 3 }), value: 200 },
    { date: sub(now, { months: 2, days: 16 }), value: 405.22 },
    { date: sub(now, { months: 2 }), value: 200 },
    { date: sub(now, { months: 1, days: 15 }), value: 300 },
    { date: sub(now, { months: 1 }), value: 200 },
  ],
};
