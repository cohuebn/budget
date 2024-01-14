import { randomHex, randomUuid } from "@budget/testing";

import { MongoClientManager } from "./mongodb-client-manager";

describe("mongo db client", () => {
  it("should be able to interact with the budget database", async () => {
    await using clientManager = new MongoClientManager();
    const client = await clientManager.getClient();

    const testCollectionName = `testdata-${randomHex(8)}`;
    const collection = client.db().collection(testCollectionName);
    const itemId = randomUuid();
    await collection.insertOne({ im: randomUuid() });
    const cursor = await collection.find({ im: itemId });
    const results = cursor.toArray();
    expect(results).toHaveLength(1);
  });
});
