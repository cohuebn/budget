import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { DashboardPanel } from "./dashboard-panel";
import { UpcomingEvent } from "./upcoming-event";

import { UpcomingEventData } from "~/types";

type UpcomingEventsProps = {
  upcomingEvents: UpcomingEventData[];
};

export function UpcomingEvents(props: UpcomingEventsProps) {
  const content = (
    <Table size="small" sx={{ maxWidth: 400 }}>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Event</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.upcomingEvents.map((upcomingEvent) => (
          <UpcomingEvent key={upcomingEvent.id} upcomingEvent={upcomingEvent} />
        ))}
      </TableBody>
    </Table>
  );
  return <DashboardPanel title="Upcoming Events" children={content} />;
}
