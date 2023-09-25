import pino from "pino";
import { getOptional } from "./env";

export function createLogger(name: string) {
  return pino({ name, level: getOptional("LOG_LEVEL", "info") });
}
