import { getTestDataLoader } from "@budget/testing/io";

import { parseFile } from "./parser";

describe("parser", () => {
  const testDataLoader = getTestDataLoader(__dirname);

  it("should parse the first community export file", async () => {
    const exportFilePath = testDataLoader.getFullFilepath("test-data/fccu-export.csv");

    const results = await parseFile(exportFilePath);

    expect(results).toHaveLength(8);

    expect(results[0].accountName).toBe("Primary checking");
    expect(results[0].accountNumber).toBe("123456789A00");
    expect(results[0].transactionNumber).toBe("20240102000000[-6:CST]*1.37*504**FIRST COMMUNITY");
    expect(results[0].date).toEqual(new Date("2024-01-02"));
    expect(results[0].description).toBe("FIRST COMMUNITY");
    expect(results[0].amountDebit).toBeUndefined();
    expect(results[0].amountCredit).toBe(1.37);
    expect(results[0].balance).toBe(1056.28);
    expect(results[0].checkNumber).toBeUndefined();
    expect(results[0].fees).toBeUndefined();

    expect(results[1].accountName).toBe("Primary checking");
    expect(results[1].accountNumber).toBe("123456789A00");
    expect(results[1].transactionNumber).toBe(
      "20240107000000[-6:CST]*-59.37*13**CHICK-FIL-A #05060",
    );
    expect(results[1].date).toEqual(new Date("2024-01-07"));
    expect(results[1].description).toBe("CHICK-FIL-A #05060");
    expect(results[1].amountDebit).toBe(-59.37);
    expect(results[1].amountCredit).toBeUndefined();
    expect(results[1].balance).toBe(1054.91);
    expect(results[1].checkNumber).toBeUndefined();
    expect(results[1].fees).toBeUndefined();
  });
});
