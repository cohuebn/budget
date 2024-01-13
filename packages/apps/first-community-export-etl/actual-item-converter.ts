import { ActualItemWithId } from "@budget/core/types";
import { isNotNullOrUndefined, toHashedKey } from "@budget/core";

import { CsvRowWithSummary } from "./types";

function getAmount(csvRow: CsvRowWithSummary): number {
  if (isNotNullOrUndefined(csvRow.amountCredit)) return csvRow.amountCredit;
  if (isNotNullOrUndefined(csvRow.amountDebit)) return csvRow.amountDebit;
  throw new Error(
    `Neither amount credit or debit provided for this transaction: ${csvRow.transactionNumber}`,
  );
}

export function toActualBudgetItem(csvRow: CsvRowWithSummary): ActualItemWithId {
  return {
    _id: toHashedKey([csvRow.transactionNumber]),
    accountName: csvRow.accountName,
    accountNumber: csvRow.accountNumber,
    datetime: csvRow.date,
    name: csvRow.description,
    description: csvRow.description,
    amount: getAmount(csvRow),
  };
}
