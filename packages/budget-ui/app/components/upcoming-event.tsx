import { TableCell, TableRow } from "@mui/material";

import { formatCurrency } from "~/formatters/currency";
import { formatDate } from "~/formatters/date";
import { UpcomingEventData } from "~/types";

type UpcomingEventProps = {
  upcomingEvent: UpcomingEventData;
};

export function UpcomingEvent({ upcomingEvent }: UpcomingEventProps) {
  return (
    <TableRow>
      <TableCell sx={{ borderBottom: "none" }}>
        {formatDate(upcomingEvent.date)}
      </TableCell>
      <TableCell sx={{ borderBottom: "none" }}>{upcomingEvent.name}</TableCell>
      <TableCell align="right" sx={{ borderBottom: "none" }}>
        {formatCurrency(upcomingEvent.value)}
      </TableCell>
    </TableRow>
  );
}
