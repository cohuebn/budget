import { getFirestore } from "firebase/firestore";

import { getFirebaseApp } from "./app";

import { lazyLoad } from "@budget/core";

export const getDatabase = lazyLoad(async () => {
  const firebaseApp = await getFirebaseApp();
  return getFirestore(firebaseApp);
});
