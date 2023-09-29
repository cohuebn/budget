/* eslint-disable sonarjs/no-duplicate-string */
import { sub } from "date-fns";
import { BudgetItem } from "@budget/core/types";

const now = new Date();
export const actualSpend: Record<string, BudgetItem[]> = {
  Bills: [
    { name: "Mortgage", datetime: sub(now, { months: 6 }), amount: 1500 },
    { name: "Electric", datetime: sub(now, { months: 5, days: 15 }), amount: 200 },
    { name: "Mortgage", datetime: sub(now, { months: 5 }), amount: 1700 },
    { name: "Electric", datetime: sub(now, { months: 4, days: 14 }), amount: 159 },
    { name: "Mortgage", datetime: sub(now, { months: 4 }), amount: 1700 },
    { name: "Electric", datetime: sub(now, { months: 3, days: 15 }), amount: 163.5 },
    { name: "Mortgage", datetime: sub(now, { months: 3 }), amount: 1700 },
    { name: "Electric", datetime: sub(now, { months: 2, days: 16 }), amount: 109.12 },
    { name: "Mortgage", datetime: sub(now, { months: 2 }), amount: 1700 },
    { name: "Electric", datetime: sub(now, { months: 1, days: 15 }), amount: 190.5 },
    { name: "Mortgage", datetime: sub(now, { months: 1 }), amount: 1700 },
  ],
  Debts: [
    { name: "Student loans", datetime: sub(now, { months: 6 }), amount: 1100 },
    { name: "Car payment", datetime: sub(now, { months: 5, days: 10 }), amount: 1200 },
    { name: "Student loans", datetime: sub(now, { months: 5 }), amount: 1100 },
    { name: "Car payment", datetime: sub(now, { months: 4, days: 11 }), amount: 1200 },
    { name: "Student loans", datetime: sub(now, { months: 4 }), amount: 1100 },
    { name: "Car payment", datetime: sub(now, { months: 3, days: 10 }), amount: 1300.56 },
    { name: "Student loans", datetime: sub(now, { months: 3 }), amount: 1400 },
    { name: "Car payment", datetime: sub(now, { months: 2, days: 12 }), amount: 1100 },
    { name: "Student loans", datetime: sub(now, { months: 2 }), amount: 1300 },
    { name: "Car payment", datetime: sub(now, { months: 1, days: 11 }), amount: 1200 },
    { name: "Student loans", datetime: sub(now, { months: 1 }), amount: 1500 },
  ],
  Entertainment: [
    { name: "Escape room", datetime: sub(now, { months: 6 }), amount: 250 },
    { name: "Date night", datetime: sub(now, { months: 5, days: 13 }), amount: 300 },
    { name: "Birthday party", datetime: sub(now, { months: 5 }), amount: 500 },
    { name: "Dinner & a movie", datetime: sub(now, { months: 4, days: 17 }), amount: 105 },
    { name: "Retaurant", datetime: sub(now, { months: 4 }), amount: 80 },
    { name: "Retaurant", datetime: sub(now, { months: 3, days: 18 }), amount: 100 },
    { name: "Bowling", datetime: sub(now, { months: 3 }), amount: 45 },
    { name: "Restaurant", datetime: sub(now, { months: 2, days: 9 }), amount: 89.96 },
    { name: "Ice cream", datetime: sub(now, { months: 2 }), amount: 25.0 },
  ],
  Savings: [
    { name: "Savings", datetime: sub(now, { months: 6 }), amount: 300 },
    { name: "Savings", datetime: sub(now, { months: 5, days: 1 }), amount: 200 },
    { name: "Savings", datetime: sub(now, { months: 5 }), amount: 205.98 },
    { name: "Savings", datetime: sub(now, { months: 4, days: 12 }), amount: 100 },
    { name: "Savings", datetime: sub(now, { months: 4 }), amount: 200 },
    { name: "Savings", datetime: sub(now, { months: 3, days: 9 }), amount: 300 },
    { name: "Savings", datetime: sub(now, { months: 3 }), amount: 200 },
    { name: "Savings", datetime: sub(now, { months: 2, days: 10 }), amount: 405.22 },
    { name: "Savings", datetime: sub(now, { months: 2 }), amount: 200 },
    { name: "Savings", datetime: sub(now, { months: 1, days: 23 }), amount: 300 },
    { name: "Savings", datetime: sub(now, { months: 1 }), amount: 200 },
  ],
};
