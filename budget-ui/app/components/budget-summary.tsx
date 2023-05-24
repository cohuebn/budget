import { format } from "date-fns";
import { Paper, Table, TableBody, Typography } from "@mui/material";
import { CalendarMonth, Payments, Receipt } from "@mui/icons-material";

import { BudgetSummaryData } from "../types";

import { BudgetSummaryItem } from "./budget-summary-item";

type BudgetSummaryProps = {
  budgetSummary: BudgetSummaryData;
};

export function BudgetSummary({ budgetSummary }: BudgetSummaryProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ padding: "32px" }}>
        <Typography variant="h4" textAlign="center">
          Your Budget Summary
        </Typography>
        <Table size="small">
          <TableBody>
            <BudgetSummaryItem
              label="Current Period End Date"
              value={format(budgetSummary.currentPeriod.endDate, "yyyy-MM-dd")}
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
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
