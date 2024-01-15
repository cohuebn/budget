import { randomHex, randomInt, randomUuid } from "@budget/testing";

import { MongoClientManager } from "./mongodb-client-manager";

describe("mongo db client", () => {
  beforeEach(async () => {
    await using clientManager = new MongoClientManager({ isAdminConnection: true });
    const client = await clientManager.getClient();
    await client.db().dropDatabase();
  });

  it("should be able to interact with the budget database", async () => {
    await using clientManager = new MongoClientManager({ isAdminConnection: true });
    const client = await clientManager.getClient();

    const testCollectionName = `testdata-${randomHex(8)}`;
    const collection = client.db().collection(testCollectionName);
    const itemId = randomUuid();
    const value = randomInt();
    const item = { itemId, value };
    await collection.insertOne({ itemId, value });
    const cursor = collection.find<typeof item>({ itemId });
    const results = await cursor.toArray();
    expect(results).toHaveLength(1);
    expect(results[0].value).toBe(value);
  });
});
