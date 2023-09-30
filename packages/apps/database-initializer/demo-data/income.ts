import { sub } from "date-fns";
import { BudgetItemWithId } from "@budget/core/types";

import { MongoDemoData } from "./types";

const now = new Date();
const incomeItems: BudgetItemWithId[] = [
  {
    _id: "a21f9b53-e624-4573-b118-0df6088ae1b6",
    name: "Paycheck",
    datetime: sub(now, { months: 6 }),
    amount: 4675.78,
  },
  {
    _id: "e5bad020-e6b4-4d03-a7b6-1e392e45eefa",
    name: "Paycheck",
    datetime: sub(now, { months: 5, days: 15 }),
    amount: 4675.78,
  },
  {
    _id: "58e55067-7ae3-4dd3-b788-b95f69b074dc",
    name: "Paycheck",
    datetime: sub(now, { months: 5 }),
    amount: 4675.78,
  },
  {
    _id: "f311c336-80bd-41f4-8a75-a2c822a2a8ff",
    name: "Paycheck",
    datetime: sub(now, { months: 4, days: 14 }),
    amount: 4675.78,
  },
  {
    _id: "235cc110-46c5-4030-852b-45a13571634b",
    name: "Paycheck",
    datetime: sub(now, { months: 4 }),
    amount: 4675.78,
  },
  {
    _id: "7bc3df01-7d01-4bab-b3f8-101e1fb1d2cb",
    name: "Paycheck",
    datetime: sub(now, { months: 3, days: 15 }),
    amount: 4675.78,
  },
  {
    _id: "52a1cf54-c8aa-481e-8243-cc80d05cb1ad",
    name: "Paycheck",
    datetime: sub(now, { months: 3 }),
    amount: 4675.78,
  },
  {
    _id: "49fadfcc-e43a-402b-96e3-a52ddf012003",
    name: "Paycheck",
    datetime: sub(now, { months: 2, days: 16 }),
    amount: 4675.78,
  },
  {
    _id: "e5f4da5b-a016-497a-8668-37804fa6efcd",
    name: "Paycheck",
    datetime: sub(now, { months: 2 }),
    amount: 4675.78,
  },
  {
    _id: "1733242b-d660-4bc9-84b2-f21218eed557",
    name: "Paycheck",
    datetime: sub(now, { months: 1, days: 15 }),
    amount: 4675.78,
  },
  {
    _id: "b68f8013-398f-436f-9389-9997e6a7fc66",
    name: "Paycheck",
    datetime: sub(now, { months: 1 }),
    amount: 4675.78,
  },
].map((x) => ({ ...x, category: "Income" }));

export const income: MongoDemoData = {
  collection: "actuals-history",
  documents: incomeItems,
};
