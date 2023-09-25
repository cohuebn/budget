import { formatCurrency } from "./currency";

describe("formatCurrency", () => {
  const testCases = [
    { val: 3, expected: "$3.00" },
    { val: 3.5, expected: "$3.50" },
    { val: 403.13, expected: "$403.13" },
    { val: -5.13, expected: "-$5.13" },
  ];
  testCases.forEach(({ val, expected }) => {
    it(`should format to currency: ${val}`, () => {
      expect(formatCurrency(val)).toBe(expected);
    });
  });
});
