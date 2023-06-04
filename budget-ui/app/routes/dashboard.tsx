import { Box, Grid } from "@mui/material";
import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { BudgetSummary } from "~/components/budget-summary";
import { UpcomingEvents } from "~/components/upcoming-events";
import { mockBudgetSummaryData } from "~/mock-data/budget-summary";
import { mockUpcomingEvents } from "~/mock-data/upcoming-events";

export async function loader() {
  return typedjson({
    summary: mockBudgetSummaryData,
    upcomingEvents: mockUpcomingEvents,
  });
}

export default function Dashboard() {
  const { summary, upcomingEvents } = useTypedLoaderData<typeof loader>();
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BudgetSummary budgetSummary={summary} />
        </Grid>
        <Grid item xs={6}>
          <UpcomingEvents upcomingEvents={upcomingEvents} />
        </Grid>
      </Grid>
    </Box>
  );
}
