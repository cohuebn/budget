export type BudgetItem = {
  name: string;
  datetime: Date;
  amount: number;
};

export type CategorizedBudgetItem = BudgetItem & {
  category: string;
};
