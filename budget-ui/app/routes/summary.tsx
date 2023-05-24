import { typedjson, useTypedLoaderData } from "remix-typedjson";

import { BudgetSummary } from "~/components/budget-summary";
import { BudgetSummaryData } from "~/types";

export async function loader() {
  const data: BudgetSummaryData = {
    currentPeriod: {
      endDate: new Date(),
      income: 3.5,
      expenses: 1.05,
    },
  };
  return typedjson(data);
}

export default function Summary() {
  const budgetSummary = useTypedLoaderData<typeof loader>();
  return <BudgetSummary budgetSummary={budgetSummary} />;
}
