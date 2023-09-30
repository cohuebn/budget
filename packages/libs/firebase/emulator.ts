import {
  getOptionalBool,
  getRequired,
  getTransformedOptional,
} from "@budget/core";

import { FirebaseEmulatorConfig } from "./types";

/** Should the Firebase emulator be used by the application?
 * @returns true if the emulator should be used, false otherwise
 */
export function useEmulator() {
  return getOptionalBool("USE_FIREBASE_EMULATOR");
}

/** Get the Firebase emulator configuration from environment variables */
export function getFirebaseEmulatorConfig(): FirebaseEmulatorConfig {
  return {
    emulatorHost: getRequired("FIREBASE_EMULATOR_HOST"),
    emulatorAuthPort: getTransformedOptional(
      "FIREBASE_EMULATOR_AUTH_PORT",
      (value: string) => parseInt(value, 10),
      9099,
    ),
  };
}
