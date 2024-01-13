import { WithId } from "./with-id";

export type BudgetItem = {
  category: string;
  name: string;
  datetime: Date;
  amount: number;
};

export type BudgetItemWithId = WithId<BudgetItem>;
