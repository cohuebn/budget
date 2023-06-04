import { v4 as uuid } from "uuid";
import { add } from "date-fns";

import { UpcomingEventData } from "~/types";

const now = new Date();

export const mockUpcomingEvents: UpcomingEventData[] = [
  {
    id: uuid(),
    date: add(now, { hours: 3 }),
    name: "Electric bill",
    value: -55,
  },
  {
    id: uuid(),
    date: add(now, { days: 2, hours: 13 }),
    name: "Paycheck",
    value: 1200.05,
  },
  {
    id: uuid(),
    date: add(now, { days: 6, hours: 11 }),
    name: "Compassion donation",
    value: -68,
  },
  {
    id: uuid(),
    date: add(now, { days: 6, hours: 11 }),
    name: "Groceries",
    value: -200,
  },
  {
    id: uuid(),
    date: add(now, { days: 6, hours: 11 }),
    name: "Student loans",
    value: -500,
  },
];
