import { getTestDataLoader } from "@budget/testing/io";

import { ingestFirstCommunityExport } from "./ingester";

describe("ingestFirstCommunityExport", () => {
  const testDataLoader = getTestDataLoader(__dirname);

  beforeAll(async () => {});

  it("should transform and save the data from the FCCU export", () => {});
});
