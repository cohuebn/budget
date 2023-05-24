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
        <span style={{ display: "inline-block", width: "5em" }}>
          {props.label}:{" "}
        </span>
        <span style={{ textAlign: "right" }}>
          {formatCurrency(props.value)}
        </span>
      </Typography>
    </ListItem>
  );
}
