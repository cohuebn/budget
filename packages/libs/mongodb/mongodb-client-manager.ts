import { createLogger } from "@budget/core";
import { MongoClient } from "mongodb";

import { config } from "./config";

const logger = createLogger("budget-mongodb-client");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");

/** A class that:
 * 1. Allows simpler setup to connect to the MongoDB budget application
 * 2. Automatically disposed of the connection when 'using' blocks are used
 */
export class MongoClientManager implements AsyncDisposable {
  _client: Promise<MongoClient>;

  constructor() {
    this._client = MongoClient.connect(config.dbConnectionString());
  }

  getClient(): Promise<MongoClient> {
    return this._client;
  }

  async [Symbol.asyncDispose]() {
    logger.debug("Disposing of MongoDB client");
    const resolvedClient = await this._client;
    await resolvedClient.close();
    logger.debug("Disposed MongoDB client");
  }
}
