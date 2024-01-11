import { readFile } from "fs/promises";

import { parse as parseDate } from "date-fns";
import { parse as parseCsv } from "csv-parse/sync";
import { isNullOrUndefined, isObject } from "@budget/core";

import { CsvRow, CsvRowWithSummary } from "./types";

/** Running results as each line of the export file is being processed */
type AggregationResults = {
  accountName: string;
  accountNumber: string;
  dateRange: string;
  headerColumns: string[];
  dataRows: CsvRow[];
};

function matchSummaryLine(line: string) {
  const pattern = /\s*"(?<label>Account Name|Account Number|Date Range)\s*:\s*(?<value>.+)"\s*/;
  return pattern.exec(line);
}

function isHeaderLine(line: string): boolean {
  const pattern = /^\s*Transaction Number,Date,Description.*$/;
  return pattern.test(line);
}

function summaryValueExtractor(match: RegExpExecArray): Partial<AggregationResults> {
  const label = match.groups?.label;
  const value = match.groups?.value;
  if (label === "Account Name") return { accountName: value };
  if (label === "Account Number") return { accountNumber: value };
  if (label === "Date Range") return { dateRange: value };
  throw new Error(`Unexpected summary field with label ${label} and value ${value}`);
}

function toField(columnName: string): keyof CsvRow {
  switch (columnName.trim()) {
    case "Transaction Number":
      return "transactionNumber";
    case "Date":
      return "date";
    case "Description":
      return "description";
    case "Memo":
      return "memo";
    case "Amount Debit":
      return "amountDebit";
    case "Amount Credit":
      return "amountCredit";
    case "Balance":
      return "balance";
    case "Check Number":
      return "checkNumber";
    case "Fees":
      return "fees";
    default:
      throw new Error(`Unexpected column name: ${columnName}`);
  }
}

function parseOptionalString(value: string): string | undefined {
  return isNullOrUndefined(value) || value.trim() === "" ? undefined : value;
}

function parseOptionalNumber(value: string): number | undefined {
  const optionalString = parseOptionalString(value);
  return isNullOrUndefined(optionalString) ? undefined : parseFloat(value);
}

function validateCsvRow(data: unknown): asserts data is CsvRow {
  if (!isObject(data)) {
    throw new Error(`The provided csv row is not an object`);
  }
  const requiredFields: Array<keyof CsvRow> = ["transactionNumber", "description", "date"];
  const missingRequiredFields = requiredFields.filter((field) => !(field in data));
  if (missingRequiredFields.length) {
    throw new Error(
      `The provided data row is missing required fields: ${missingRequiredFields.join(",")}`,
    );
  }
}

function validateAggregationResults(
  data: Partial<AggregationResults>,
): asserts data is AggregationResults {
  const requiredFields: Array<keyof AggregationResults> = [
    "accountName",
    "accountNumber",
    "dataRows",
  ];
  const missingRequiredFields = requiredFields.filter((field) => !(field in data));
  if (missingRequiredFields.length) {
    throw new Error(
      `The provided data row is missing required fields: ${missingRequiredFields.join(",")}`,
    );
  }
}

function toCsvRow(rawData: Record<keyof CsvRow, string>): CsvRow {
  const transformedData = {
    ...rawData,
    date: parseDate(`${rawData.date}T00:00:00Z`, "MM/dd/yyyy'T'mm:HH:ssX", new Date()),
    amountCredit: parseOptionalNumber(rawData.amountCredit),
    amountDebit: parseOptionalNumber(rawData.amountDebit),
    balance: parseFloat(rawData.balance),
    fees: parseOptionalNumber(rawData.fees),
    checkNumber: parseOptionalString(rawData.checkNumber),
    memo: parseOptionalString(rawData.memo),
  };
  validateCsvRow(transformedData);
  return transformedData;
}

function parseDataLine(line: string, headerColumns: string[]): CsvRow {
  const rawData = parseCsv(line, { columns: headerColumns })[0];
  return toCsvRow(rawData);
}

function aggregateLine(
  aggregatedResults: Partial<AggregationResults>,
  line: string,
): Partial<AggregationResults> {
  const parsedSummaryLine = matchSummaryLine(line);
  if (parsedSummaryLine) {
    return { ...aggregatedResults, ...summaryValueExtractor(parsedSummaryLine) };
  }

  if (isHeaderLine(line)) {
    const rawHeaderColumns: string[] = parseCsv(line)[0];
    const headerColumns = rawHeaderColumns.map(toField);
    return { ...aggregatedResults, headerColumns };
  }

  const { headerColumns } = aggregatedResults;
  if (!headerColumns) {
    throw new Error("Reached data row parsing, but no header row was found first");
  }
  const dataRow = parseDataLine(line, headerColumns);
  const existingDataRows = aggregatedResults.dataRows ?? [];
  const dataRows = [...existingDataRows, dataRow];
  return { ...aggregatedResults, dataRows };
}

function combineAggregationResults(aggregationResults: AggregationResults): CsvRowWithSummary[] {
  return aggregationResults.dataRows.map((dataRow) => {
    return {
      ...dataRow,
      accountName: aggregationResults.accountName,
      accountNumber: aggregationResults.accountNumber,
    };
  });
}

function parseCsvContents(contents: string): CsvRowWithSummary[] {
  const aggregationResults = contents
    .split("\n")
    .reduce<Partial<AggregationResults>>(aggregateLine, {});
  validateAggregationResults(aggregationResults);
  return combineAggregationResults(aggregationResults);
}

export async function parseFile(filename: string): Promise<CsvRowWithSummary[]> {
  const fileContents = await readFile(filename);
  return parseCsvContents(fileContents.toString("utf-8"));
}
