import {
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Payments, Receipt } from "@mui/icons-material";

import { BudgetSummary as BudgetSummaryData } from "../types";

import { BudgetSummaryItem } from "./budget-summary-item";

type BudgetSummaryProps = {
  budgetSummary: BudgetSummaryData;
};

export function BudgetSummary({ budgetSummary }: BudgetSummaryProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper sx={{ maxWidth: "800px", padding: "32px" }}>
        <Typography variant="h4" textAlign="center">
          Your Budget Summary
        </Typography>
        <Table>
          <TableBody>
            <BudgetSummaryItem
              label="Income"
              value={budgetSummary.income}
              icon={<Payments />}
            />
            <BudgetSummaryItem
              label="Expenses"
              value={budgetSummary.expenses}
              icon={<Receipt />}
            />
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
