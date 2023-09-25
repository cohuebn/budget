import { getFirestore } from "firebase/firestore";

import { getFirebaseApp } from "./app";

import { lazyLoad } from "~/utils/lazy-load";

export const getDatabase = lazyLoad(async () => {
  const firebaseApp = await getFirebaseApp();
  return getFirestore(firebaseApp);
});
