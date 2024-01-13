import { WithId } from "./with-id";

export type ActualItem = {
  accountNumber: string;
  accountName: string;
  name: string;
  description?: string;
  category?: string;
  datetime: Date;
  amount: number;
};

export type ActualItemWithId = WithId<ActualItem>;
