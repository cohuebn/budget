import { randomFloat } from "@budget/testing/data-generator";

import { toActualBudgetItem } from "./actual-item-converter";
import { generateCsvRowWithSummary } from "./test-data/data-generator";

describe("toActualBudgetItem", () => {
  it("should map 1 to 1 fields", () => {
    const csvRow = generateCsvRowWithSummary();

    const result = toActualBudgetItem(csvRow);

    expect(result.accountName).toBe(csvRow.accountName);
    expect(result.accountNumber).toBe(csvRow.accountNumber);
    expect(result.datetime).toEqual(csvRow.date);
    expect(result.name).toBe(csvRow.description);
    expect(result.description).toBe(csvRow.description);
  });

  it("should map amount field (credit)", () => {
    const amountCredit = randomFloat({ min: 0.01, max: 1000, decimals: 2 });
    const csvRow = generateCsvRowWithSummary({ amountCredit });

    const result = toActualBudgetItem(csvRow);

    expect(result.amount).toBe(amountCredit);
  });

  it("should map amount field (debit)", () => {
    const amountDebit = -randomFloat({ min: 0.01, max: 1000, decimals: 2 });
    const csvRow = generateCsvRowWithSummary({ amountDebit });

    const result = toActualBudgetItem(csvRow);

    expect(result.amount).toBe(amountDebit);
  });

  it("should hash transaction number into id field", () => {
    const transactionNumber = "12345-im-a-transaction";
    const csvRow = generateCsvRowWithSummary({ transactionNumber });

    const result = toActualBudgetItem(csvRow);

    const expectedHashKey = "UHt5u7tlhzozMogT/uPj/6N/AFbhgAOqcaonNM/4IBk=";
    expect(result._id).toBe(expectedHashKey);
  });
});
