import { createLogger } from "@budget/core";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { FirebaseApp } from "firebase/app";

import { getFirebaseEmulatorConfig, useEmulator } from "./emulator";
import { defaultFirebaseAdminApp, defaultFirebaseApp } from "./app";

const logger = createLogger("firebase/auth");

/** Initialize Firebase auth for application use:
 * 1. If the Firebase emulator option is enabled, connect auth to the emulator
 * 2. If an app is provided, connect auth to the provided app
 * 3. If no app is provided, connect auth to the default app for the environment
 */
export function getFirebaseAuth(app?: FirebaseApp) {
  const defaultedApp = app ?? defaultFirebaseApp();
  if (useEmulator()) {
    const { emulatorHost } = getFirebaseEmulatorConfig();
    const auth = getAuth();
    logger.debug({ emulatorHost }, "Using Firebase emulator for auth");
    connectAuthEmulator(auth, emulatorHost);
    return auth;
  }
  return getAuth(defaultedApp);
}

/** Initialize Firebase admin auth for application use:
 * 1. If the Firebase emulator option is enabled, connect auth to the emulator
 * 2. If an app is provided, connect auth to the provided app
 * 3. If no app is provided, connect auth to the default app for the environment
 */
export function getFirebaseAdminAuth(app?: FirebaseApp) {
  const defaultedApp = app ?? defaultFirebaseAdminApp();
  return getAdminAuth(defaultedApp);
}
