import { randomHex, randomUuid } from "@budget/testing";
import { createLogger } from "@budget/core";

import { MongoClientManager } from "./mongodb-client-manager";

const logger = createLogger("mongodb-client-manager.integration-test");

describe("mongo db client", () => {
  it("should be able to interact with the budget database", async () => {
    await using clientManager = new MongoClientManager({ isAdminConnection: true });
    try {
      const client = await clientManager.getClient();

      const testCollectionName = `testdata-${randomHex(8)}`;
      const collection = client.db().collection(testCollectionName);
      const itemId = randomUuid();
      await collection.insertOne({ im: itemId });
      const cursor = collection.find({ im: itemId });
      const results = await cursor.toArray();
      expect(results).toHaveLength(1);
    } catch (err: unknown) {
      logger.error({ err });
      throw err;
    }
  });
});
