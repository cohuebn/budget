import { initializeApp } from "firebase/app";

import { lazyLoad } from "~/utils/lazy-load";

export const getFirebaseApp = lazyLoad(async () => {
  const configResponse = await fetch("/config/firebase");
  const config = await configResponse.json();
  return initializeApp(config);
});
