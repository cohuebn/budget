import { createLogger } from "@budget/core";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { FirebaseApp } from "firebase/app";

import { getFirebaseEmulatorConfig, useEmulator } from "./emulator";
import { defaultFirebaseApp } from "./app";

const logger = createLogger("firebase/auth");

/** Initialze Firebase auth for application use:
 * 1. If the Firebase emulator option is enabled, connect auth to the emulator
 * 2. If an app is provided, connect auth to the provided app
 * 3. If no app is provided, connect auth to the default app for the environment
 */
export function getFirebaseAuth(app?: FirebaseApp) {
  if (useEmulator()) {
    const config = getFirebaseEmulatorConfig();
    const auth = getAuth();
    const emulatorUrl = `http://${config.emulatorHost}:${config.emulatorPort}`;
    logger.debug({ emulatorUrl }, "Using Firebase emulator for auth");
    connectAuthEmulator(auth, emulatorUrl);
    return auth;
  }
  const defaultedApp = app ?? defaultFirebaseApp();
  return getAuth(defaultedApp);
}
