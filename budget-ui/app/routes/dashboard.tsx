import { Box, Grid } from "@mui/material";
import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { BudgetSummary } from "~/components/budget-summary";
import { SpendingChart } from "~/components/spending-chart";
import { UpcomingEvents } from "~/components/upcoming-events";
import {
  mockIncomeHistory,
  mockSpendingHistory,
} from "~/mock-data/budget-history";
import { mockBudgetSummaryData } from "~/mock-data/budget-summary";
import { mockUpcomingEvents } from "~/mock-data/upcoming-events";

export async function loader() {
  return typedjson({
    summary: mockBudgetSummaryData,
    upcomingEvents: mockUpcomingEvents,
    incomeHistory: mockIncomeHistory,
    spendingHistory: mockSpendingHistory,
  });
}

export default function Dashboard() {
  const { summary, upcomingEvents, incomeHistory, spendingHistory } =
    useTypedLoaderData<typeof loader>();
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BudgetSummary budgetSummary={summary} />
        </Grid>
        <Grid item xs={6}>
          <UpcomingEvents upcomingEvents={upcomingEvents} />
        </Grid>
        <Grid item xs={12}>
          <SpendingChart income={incomeHistory} spending={spendingHistory} />
        </Grid>
      </Grid>
    </Box>
  );
}
