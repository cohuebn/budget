import { getFirestore } from "firebase/firestore";
import { lazyLoad } from "@budget/core";

import { getFirebaseApp } from "./app";

export const getDatabase = lazyLoad(async () => {
  const firebaseApp = await getFirebaseApp();
  return getFirestore(firebaseApp);
});
