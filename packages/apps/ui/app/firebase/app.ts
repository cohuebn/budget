import { FirebaseApp, initializeApp } from "firebase/app";
import { lazyLoad } from "@budget/core";
import { LazyLoaded } from "@budget/core/types";
import { FirebaseEmulatorConfig } from "@budget/firebase";

export const defaultFirebaseApp: LazyLoaded<Promise<FirebaseApp>> = lazyLoad(async () => {
  const configResponse = await fetch("/config/firebase");
  const config = await configResponse.json();
  return initializeApp(config);
});

export const firebaseEmulatorConfig: LazyLoaded<Promise<FirebaseEmulatorConfig>> = lazyLoad(
  async () => {
    const configResponse = await fetch("/config/firebase/emulator");
    return configResponse.json();
  },
);
