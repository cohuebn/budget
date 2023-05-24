import { ListItem, TableCell, TableRow, Typography } from "@mui/material";

import { formatCurrency } from "~/formatters/currency";

type BudgetSummaryItemProps = {
  label: string;
  value: number;
  icon: React.ReactElement;
};

export function BudgetSummaryItem(props: BudgetSummaryItemProps) {
  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "none" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          {props.icon} <span style={{ marginLeft: 8 }}>{props.label}</span>
        </span>
      </TableCell>
      <TableCell align="right" sx={{ borderBottom: "none" }}>
        {formatCurrency(props.value)}
      </TableCell>
    </TableRow>
  );
}
