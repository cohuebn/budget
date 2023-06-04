import { Table, TableBody } from "@mui/material";
import { CalendarMonth, Payments, Receipt } from "@mui/icons-material";

import { BudgetSummaryData } from "../types";

import { BudgetSummaryItem } from "./budget-summary-item";
import { DashboardPanel } from "./dashboard-panel";

import { formatDate } from "~/formatters/date";

type BudgetSummaryProps = {
  budgetSummary: BudgetSummaryData;
};

export function BudgetSummary({ budgetSummary }: BudgetSummaryProps) {
  const content = (
    <Table size="small" sx={{ maxWidth: 400 }}>
      <TableBody>
        <BudgetSummaryItem
          label="Current Period End Date"
          value={formatDate(budgetSummary.currentPeriod.endDate)}
          icon={<CalendarMonth />}
        />
        <BudgetSummaryItem
          label="Current Period Income"
          value={budgetSummary.currentPeriod.income}
          icon={<Payments />}
        />
        <BudgetSummaryItem
          label="Current Period Expenses"
          value={budgetSummary.currentPeriod.expenses}
          icon={<Receipt />}
        />
        <BudgetSummaryItem
          label="Current Period Profit/Loss"
          value={
            budgetSummary.currentPeriod.income +
            budgetSummary.currentPeriod.expenses
          }
          icon={<Receipt />}
        />
      </TableBody>
    </Table>
  );
  return <DashboardPanel title="Your Budget Summary" children={content} />;
}
