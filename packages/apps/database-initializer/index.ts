import { MongoClient } from "mongodb";
import { createLogger } from "@budget/core";
import { program } from "commander";

import { config } from "./config";

const logger = createLogger("index");

type RunInitializerOptions = {
  includeDemoData: boolean;
};

export async function initializeDatabase(options: RunInitializerOptions) {
  let mongoClient: MongoClient | undefined;
  try {
    logger.info({ options }, "Running database initialization");
    mongoClient = await MongoClient.connect(config.dbConnectionString);
    logger.info("Successfully connected to database");
    mongoClient.db().collection("actuals-history");
  } catch (err: unknown) {
    logger.error({ err }, "An unhandled exception occurred");
  } finally {
    if (mongoClient) await mongoClient.close();
    logger.info("Done");
  }
}

program
  .command("run-initializer")
  .description(
    "Run the database initializer to get the required collections in place in the database",
  )
  .option("--include-demo-data", "should demo data be included in the database?")
  .action(async (options: RunInitializerOptions) => {
    await initializeDatabase(options);
  });

program.parse();
