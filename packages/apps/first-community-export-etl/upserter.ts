import { createLogger } from "@budget/core";
import { ActualItemWithId } from "@budget/core/types";

const logger = createLogger("upserter");

/** Upsert CSV rows as actual budget item */
export function upsert(actualItems: ActualItemWithId[]) {
  logger.info({ itemCount: actualItems.length }, "Upserting items");
}
