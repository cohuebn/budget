import { initializeApp, FirebaseOptions } from "firebase/app";
import { initializeApp as initializeAdminApp } from "firebase-admin/app";
import { getOptional, getRequired, lazyLoad } from "@budget/core";

export function getFirebaseOptionsFromEnvironment(): FirebaseOptions {
  return {
    projectId: getRequired("FIREBASE_PROJECT_ID"),
    apiKey: getOptional("FIREBASE_API_KEY"),
    authDomain: getOptional("FIREBASE_AUTH_DOMAIN"),
    storageBucket: getOptional("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getOptional("FIREBASE_MESSAGING_SENDER_ID"),
    appId: getOptional("FIREBASE_APP_ID"),
    measurementId: getOptional("FIREBASE_MEASUREMENT_ID"),
  };
}

/** A lazy-loaded Firebase app using environment variables for setting */
export const defaultFirebaseApp = lazyLoad(() => {
  const options = getFirebaseOptionsFromEnvironment();
  return initializeApp(options);
});

/** A lazy-loaded Firebase admin app using environment variables for setting */
export const defaultFirebaseAdminApp = lazyLoad(() => {
  const options = getFirebaseOptionsFromEnvironment();
  return initializeAdminApp(options);
});
