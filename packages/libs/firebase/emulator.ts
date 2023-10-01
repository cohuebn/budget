import { getOptionalBool, getRequired } from "@budget/core";

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
    emulatorHost: getRequired("FIREBASE_AUTH_EMULATOR_HOST"),
  };
}
