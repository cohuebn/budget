import { ListItem, Typography } from "@mui/material";

import { formatCurrency } from "~/formatters/currency";

type BudgetSummaryItemProps = {
  label: string;
  value: number;
  icon: React.ReactElement;
};

export function BudgetSummaryItem(props: BudgetSummaryItemProps) {
  return (
    <ListItem disablePadding sx={{ marginBottom: 1 }}>
      {props.icon}
      <Typography variant="body1" sx={{ marginLeft: 1, minWidth: 30 }}>
        {props.label}: {formatCurrency(props.value)}
      </Typography>
    </ListItem>
  );
}
