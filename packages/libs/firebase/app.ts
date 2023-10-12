import { initializeApp } from "firebase/app";
import { lazyLoad } from "@budget/core";
import { getFirebaseOptionsFromEnvironment } from "@budget/firebase-config";

/** A lazy-loaded Firebase app using environment variables for setting */
export const defaultFirebaseApp = lazyLoad(() => {
  const options = getFirebaseOptionsFromEnvironment();
  return initializeApp(options);
});
