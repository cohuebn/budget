import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { defaultFirebaseApp } from "./app";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const firebaseApp = await defaultFirebaseApp();
  const auth = getAuth(firebaseApp);
  return signInWithPopup(auth, provider);
}
