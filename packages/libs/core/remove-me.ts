import { createLogger } from "./logger";

const logger = createLogger("Remove me");

export function deleteMe() {
  logger.info("Here to check CI workflow");
}
