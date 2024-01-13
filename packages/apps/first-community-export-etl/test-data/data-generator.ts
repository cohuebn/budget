import { randomDate, randomFloat, randomString } from "@budget/testing/data-generator";
import { isNotNullOrUndefined } from "@budget/core";

import { CsvRowWithSummary } from "../types";

export function generateCsvRowWithSummary(
  data: Partial<CsvRowWithSummary> = {},
): CsvRowWithSummary {
  const hasDebit = isNotNullOrUndefined(data.amountDebit);
  return {
    accountName: randomString(),
    accountNumber: randomString(),
    amountCredit: hasDebit ? undefined : randomFloat({ min: 0, max: 3_000, decimals: 2 }),
    transactionNumber: randomString(),
    description: randomString({ wordCount: 3 }),
    date: randomDate(),
    balance: randomFloat({ min: 0, max: 5_000_000, decimals: 2 }),
    ...data,
  };
}
