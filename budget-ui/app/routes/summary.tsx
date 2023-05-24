import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { BudgetSummary } from "~/components/budget-summary";

export async function loader() {
  return json({
    income: 3.5,
    expenses: 1.05,
  });
}

export default function Summary() {
  const budgetSummary = useLoaderData<typeof loader>();
  return <BudgetSummary budgetSummary={budgetSummary} />;
}
