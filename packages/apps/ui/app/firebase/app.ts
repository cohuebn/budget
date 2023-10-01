import { initializeApp } from "firebase/app";
import { lazyLoad } from "@budget/core";

export const defaultFirebaseApp = lazyLoad(async () => {
  const configResponse = await fetch("/config/firebase");
  const config = await configResponse.json();
  return initializeApp(config);
});
