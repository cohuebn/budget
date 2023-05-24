import { Payments, Receipt } from "@mui/icons-material";
import { Container, List, Typography } from "@mui/material";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { BudgetSummaryItem } from "~/components/budget-summary-item";

export async function loader() {
  return json({
    income: 3.5,
    expenses: 1.05,
  });
}

export default function Budget() {
  const budgetSummary = useLoaderData<typeof loader>();
  return (
    <Container>
      <Typography variant="h4">Your Budget Summary</Typography>
      <List>
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
      </List>
    </Container>
  );
}
