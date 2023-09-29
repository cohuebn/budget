import { sub } from "date-fns";
import { BudgetItem } from "@budget/core/types";

const now = new Date();
export const incomeHistory: BudgetItem[] = [
  { name: "Paycheck", datetime: sub(now, { months: 6 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 5, days: 15 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 5 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 4, days: 14 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 4 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 3, days: 15 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 3 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 2, days: 16 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 2 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 1, days: 15 }), amount: 4675.78 },
  { name: "Paycheck", datetime: sub(now, { months: 1 }), amount: 4675.78 },
];
