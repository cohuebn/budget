/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: false,
  transform: {
    "\\.ts$": ["ts-jest", { tsconfig: "./tsconfig-tests.json" }],
  },
};
