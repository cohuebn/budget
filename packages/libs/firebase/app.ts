import { initializeApp, FirebaseOptions } from "firebase/app";
import { getOptional, getRequired, lazyLoad } from "@budget/core";

export function getFirebaseOptionsFromEnvironment(): FirebaseOptions {
  return {
    apiKey: getRequired("FIREBASE_API_KEY"),
    authDomain: getRequired("FIREBASE_AUTH_DOMAIN"),
    projectId: getRequired("FIREBASE_PROJECT_ID"),
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
