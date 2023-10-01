import { getFirestore } from "firebase/firestore";
import { lazyLoad } from "@budget/core";

import { defaultFirebaseApp } from "./app";

export const getDatabase = lazyLoad(async () => {
  const firebaseApp = await defaultFirebaseApp();
  return getFirestore(firebaseApp);
});
