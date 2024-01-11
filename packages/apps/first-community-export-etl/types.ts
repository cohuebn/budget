export type CsvSummary = {
  accountName: string;
  accountNumber: string;
};

export type CsvRow = {
  transactionNumber: string;
  date: Date;
  description: string;
  balance: number;
  memo?: string;
  amountDebit?: number;
  amountCredit?: number;
  checkNumber?: string;
  fees?: number;
};

export type CsvRowWithSummary = CsvRow & CsvSummary;
