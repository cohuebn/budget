import { formatDate } from "./date";

describe("formatDate", () => {
  const defaultDateTestCases = [
    { value: new Date(2023, 0, 2), expected: "2023-01-02" },
    { value: new Date(2023, 0, 2, 1, 2, 3), expected: "2023-01-02" },
    { value: new Date("2023-02-28T12:30:03Z"), expected: "2023-02-28" },
    { value: new Date("2023-03-31T12:02:03Z"), expected: "2023-03-31" },
  ];
  defaultDateTestCases.forEach(({ value, expected }) => {
    it(`should format the date in yyyy-MM-dd format by default: ${value.toISOString()}`, () => {
      expect(formatDate(value)).toBe(expected);
    });
  });
});
