import { getOptionalInt, getOptional, getRequired } from "./env";

export const config = {
  get dbHost() {
    return getRequired("DB_SERVER");
  },

  get dbPort() {
    return getOptionalInt("DB_PORT", 27017);
  },

  get dbName() {
    return getOptional("DB_NAME", "budget");
  },

  get dbConnectionString() {
    return `mongodb://${this.dbHost}:${this.dbPort}/${this.dbName}`;
  },
};
