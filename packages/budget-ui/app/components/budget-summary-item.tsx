import { TableCell, TableRow } from "@mui/material";

import { formatCurrency } from "~/formatters/currency";

type BudgetSummaryItemValue = number | Date | string;

type BudgetSummaryItemProps = {
  label: string;
  value: BudgetSummaryItemValue;
  icon: React.ReactElement;
};

function formatValue(value: BudgetSummaryItemValue) {
  if (value instanceof Date) return value.toISOString();
  return typeof value === "number" ? formatCurrency(value) : value;
}

export function BudgetSummaryItem(props: BudgetSummaryItemProps) {
  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "none" }}>
        <span style={{ display: "flex", alignItems: "center" }}>
          {props.icon} <span style={{ marginLeft: 8 }}>{props.label}</span>
        </span>
      </TableCell>
      <TableCell align="right" sx={{ borderBottom: "none" }}>
        {formatValue(props.value)}
      </TableCell>
    </TableRow>
  );
}
