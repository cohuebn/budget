/* eslint-disable sonarjs/no-duplicate-string */
import { sub } from "date-fns";
import { BudgetItemWithId } from "@budget/core/types";

import { MongoDemoData } from "./types";

const now = new Date();
const bills: BudgetItemWithId[] = [
  {
    _id: "68d848a9-56fb-4e26-a987-a950a395b8b1",
    name: "Mortgage",
    datetime: sub(now, { months: 6 }),
    amount: 1500,
  },
  {
    _id: "7b24e5d4-85ca-4507-bf99-7acd786426b3",
    name: "Electric",
    datetime: sub(now, { months: 5, days: 15 }),
    amount: 200,
  },
  {
    _id: "b3e9898b-0e24-4b5f-a4fd-ecd3b00d7f57",
    name: "Mortgage",
    datetime: sub(now, { months: 5 }),
    amount: 1700,
  },
  {
    _id: "52484167-8502-4849-8de6-aebffe8aca5d",
    name: "Electric",
    datetime: sub(now, { months: 4, days: 14 }),
    amount: 159,
  },
  {
    _id: "3f558157-3c16-460b-a2fd-bc23f1f5103f",
    name: "Mortgage",
    datetime: sub(now, { months: 4 }),
    amount: 1700,
  },
  {
    _id: "608e655b-2a71-47c1-8797-054e0e46e2d4",
    name: "Electric",
    datetime: sub(now, { months: 3, days: 15 }),
    amount: 163.5,
  },
  {
    _id: "66cf586a-66c5-4175-8571-07763a6bd4d5",
    name: "Mortgage",
    datetime: sub(now, { months: 3 }),
    amount: 1700,
  },
  {
    _id: "446a77e0-da5a-48ed-8480-5d75fa6bbe06",
    name: "Electric",
    datetime: sub(now, { months: 2, days: 16 }),
    amount: 109.12,
  },
  {
    _id: "e7a8d6d2-7561-4e6e-bfb2-7eb949d47a5a",
    name: "Mortgage",
    datetime: sub(now, { months: 2 }),
    amount: 1700,
  },
  {
    _id: "3c079658-252c-40e3-97dc-91d70cc13d47",
    name: "Electric",
    datetime: sub(now, { months: 1, days: 15 }),
    amount: 190.5,
  },
  {
    _id: "532a7382-fac5-4e4f-880f-2db72a447dca",
    name: "Mortgage",
    datetime: sub(now, { months: 1 }),
    amount: 1700,
  },
].map((x) => ({ ...x, category: "Bills" }));

const debts: BudgetItemWithId[] = [
  {
    _id: "eec3d3e1-5037-466d-a2c6-e5ba917ed949",
    name: "Student loans",
    datetime: sub(now, { months: 6 }),
    amount: 1100,
  },
  {
    _id: "57b8017f-2b31-4b86-842b-cbe28defedf5",
    name: "Car payment",
    datetime: sub(now, { months: 5, days: 10 }),
    amount: 1200,
  },
  {
    _id: "dbd94c08-e995-4c74-a0de-b8cf2a741f6e",
    name: "Student loans",
    datetime: sub(now, { months: 5 }),
    amount: 1100,
  },
  {
    _id: "53b66b6c-b92c-4b1b-912b-5d582b3e7c03",
    name: "Car payment",
    datetime: sub(now, { months: 4, days: 11 }),
    amount: 1200,
  },
  {
    _id: "7d43d4c7-8a99-4c1c-afdc-4e42c5459b90",
    name: "Student loans",
    datetime: sub(now, { months: 4 }),
    amount: 1100,
  },
  {
    _id: "2ae3a12d-376c-40e5-b1f8-3189ab3caf99",
    name: "Car payment",
    datetime: sub(now, { months: 3, days: 10 }),
    amount: 1300.56,
  },
  {
    _id: "271a6b7b-beb4-44de-8257-9894c41f0a4e",
    name: "Student loans",
    datetime: sub(now, { months: 3 }),
    amount: 1400,
  },
  {
    _id: "36069009-3e4c-43e3-b984-657ba14ef67c",
    name: "Car payment",
    datetime: sub(now, { months: 2, days: 12 }),
    amount: 1100,
  },
  {
    _id: "0b9af33d-c945-4c65-87da-5077495d963a",
    name: "Student loans",
    datetime: sub(now, { months: 2 }),
    amount: 1300,
  },
  {
    _id: "dc587ebf-ceda-435e-ba82-3ecf25d32fa5",
    name: "Car payment",
    datetime: sub(now, { months: 1, days: 11 }),
    amount: 1200,
  },
  {
    _id: "ef95fa9f-7636-46a9-a0bb-64fc33c4a896",
    name: "Student loans",
    datetime: sub(now, { months: 1 }),
    amount: 1500,
  },
].map((x) => ({ ...x, category: "Debts" }));

const entertainment: BudgetItemWithId[] = [
  {
    _id: "30637f7b-f1de-4988-af32-827c21d6022f",
    name: "Escape room",
    datetime: sub(now, { months: 6 }),
    amount: 250,
  },
  {
    _id: "59196958-ce65-4b54-a7e8-b7c229b4284a",
    name: "Date night",
    datetime: sub(now, { months: 5, days: 13 }),
    amount: 300,
  },
  {
    _id: "27579f06-787c-4052-b161-c61c4df85115",
    name: "Birthday party",
    datetime: sub(now, { months: 5 }),
    amount: 500,
  },
  {
    _id: "7710aa20-2b0b-4f4f-8bb4-8a683338b932",
    name: "Dinner & a movie",
    datetime: sub(now, { months: 4, days: 17 }),
    amount: 105,
  },
  {
    _id: "00d936d7-0d0e-478d-9f2b-ae0ce6fb0b23",
    name: "Retaurant",
    datetime: sub(now, { months: 4 }),
    amount: 80,
  },
  {
    _id: "cac38a96-331d-49f0-a832-9b8f2620809d",
    name: "Retaurant",
    datetime: sub(now, { months: 3, days: 18 }),
    amount: 100,
  },
  {
    _id: "b3c40456-f02f-48f8-a51f-4d33dc732be5",
    name: "Bowling",
    datetime: sub(now, { months: 3 }),
    amount: 45,
  },
  {
    _id: "fe6a6104-1987-4f5e-bd33-1b1a79f9fc8a",
    name: "Restaurant",
    datetime: sub(now, { months: 2, days: 9 }),
    amount: 89.96,
  },
  {
    _id: "aba905ff-5c1e-4400-9c5f-d0cef01b4b86",
    name: "Ice cream",
    datetime: sub(now, { months: 2 }),
    amount: 25.0,
  },
].map((x) => ({ ...x, category: "Entertainment" }));

const savings: BudgetItemWithId[] = [
  {
    _id: "7465eccb-be07-47e9-88f2-8b11741211e5",
    name: "Savings",
    datetime: sub(now, { months: 6 }),
    amount: 300,
  },
  {
    _id: "8b2b7a1b-8a66-488f-9860-20c82b19449b",
    name: "Savings",
    datetime: sub(now, { months: 5, days: 1 }),
    amount: 200,
  },
  {
    _id: "05ffe64d-3ee4-4556-a706-d0be7b740839",
    name: "Savings",
    datetime: sub(now, { months: 5 }),
    amount: 205.98,
  },
  {
    _id: "e8022b62-5bff-4e2c-b948-7ff2c2572bd3",
    name: "Savings",
    datetime: sub(now, { months: 4, days: 12 }),
    amount: 100,
  },
  {
    _id: "962df962-2332-4f17-a9cb-c70c0155d309",
    name: "Savings",
    datetime: sub(now, { months: 4 }),
    amount: 200,
  },
  {
    _id: "9d2f02e6-b949-485c-b2ad-05b8227be5c5",
    name: "Savings",
    datetime: sub(now, { months: 3, days: 9 }),
    amount: 300,
  },
  {
    _id: "41729ef4-bd53-4a57-b0cc-82cb63fcb4f0",
    name: "Savings",
    datetime: sub(now, { months: 3 }),
    amount: 200,
  },
  {
    _id: "9ea1e237-95b4-4db7-bb6e-6b65860c6597",
    name: "Savings",
    datetime: sub(now, { months: 2, days: 10 }),
    amount: 405.22,
  },
  {
    _id: "9605abbb-73ee-49c0-84e5-43f5c64eabdb",
    name: "Savings",
    datetime: sub(now, { months: 2 }),
    amount: 200,
  },
  {
    _id: "c791dd27-ef06-47d3-af8b-d61065a6acfb",
    name: "Savings",
    datetime: sub(now, { months: 1, days: 23 }),
    amount: 300,
  },
  {
    _id: "ed8cf0a3-aba6-476d-b128-5034334f4a1c",
    name: "Savings",
    datetime: sub(now, { months: 1 }),
    amount: 200,
  },
].map((x) => ({ ...x, category: "Savings" }));

export const spend: MongoDemoData = {
  collection: "actuals-history",
  documents: [...bills, ...debts, ...entertainment, ...savings],
};
