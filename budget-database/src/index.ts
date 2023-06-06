import { MongoClient } from "mongodb";

import { createLogger } from "./utils/logger";
import { config } from "./utils/config";

const logger = createLogger("index");

export async function main() {
  let mongoClient: MongoClient | undefined;
  try {
    logger.info("Running database initialization");
    mongoClient = await MongoClient.connect(config.dbConnectionString);
    logger.info("Successfully connected to database");
    await mongoClient.db().createCollection("actuals-history");
  } catch (err: unknown) {
    logger.error({ err }, "An unhandled exception occurred");
  } finally {
    if (mongoClient) await mongoClient.close();
    logger.info("Done");
  }
}

main();
