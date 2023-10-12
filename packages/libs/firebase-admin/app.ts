import { initializeApp as initializeAdminApp } from "firebase-admin/app";
import { getFirebaseOptionsFromEnvironment } from "@budget/firebase-config";
import { lazyLoad } from "@budget/core";

/** A lazy-loaded Firebase admin app using environment variables for setting */
export const defaultFirebaseAdminApp = lazyLoad(() => {
  const options = getFirebaseOptionsFromEnvironment();
  return initializeAdminApp(options);
});
