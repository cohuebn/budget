import { getOptionalInt, getOptional, getRequired, lazyLoad } from "@budget/core";

import { toConnectionString } from "./connection-string";

const dbHost = lazyLoad(() => getRequired("DB_SERVER"));
const dbPort = lazyLoad(() => getOptionalInt("DB_PORT", 27017));
const dbName = lazyLoad(() => getOptional("DB_NAME", "budget"));

export const config = {
  dbHost,
  dbPort,
  dbName,
  dbConnectionString: () =>
    toConnectionString({ host: dbHost(), port: dbPort(), dbName: dbName() }),
};
