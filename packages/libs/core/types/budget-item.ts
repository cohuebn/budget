export type BudgetItem = {
  category: string;
  name: string;
  datetime: Date;
  amount: number;
};

export type BudgetItemWithId = BudgetItem & { _id: string };
