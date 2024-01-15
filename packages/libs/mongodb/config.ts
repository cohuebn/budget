import { getOptionalInt, getOptional, getRequired, lazyLoad } from "@budget/core";

const dbHost = lazyLoad(() => getRequired("DB_SERVER"));
const dbPort = lazyLoad(() => getOptionalInt("DB_PORT", 27017));
const dbName = lazyLoad(() => getOptional("DB_NAME", "budget"));
const dbUsername = lazyLoad(() => getOptional("DB_USERNAME"));
const dbPassword = lazyLoad(() => getOptional("DB_PASSWORD"));

export const config = {
  dbHost,
  dbPort,
  dbName,
  dbUsername,
  dbPassword,
};
