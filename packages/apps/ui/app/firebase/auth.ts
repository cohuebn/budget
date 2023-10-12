import { signInWithPopup, GoogleAuthProvider, browserPopupRedirectResolver } from "firebase/auth";
import { getFirebaseAuth } from "@budget/firebase";

import { defaultFirebaseApp } from "./app";

const provider = new GoogleAuthProvider();

async function emulatorConfigProvider() {
  const configResponse = await fetch("/config/firebase/emulator");
  return configResponse.json();
}

export async function signInWithGoogle() {
  const firebaseApp = await defaultFirebaseApp();
  const auth = await getFirebaseAuth(firebaseApp, emulatorConfigProvider);
  return signInWithPopup(auth, provider, browserPopupRedirectResolver);
}
