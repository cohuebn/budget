import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirebaseApp } from "./app";

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const firebaseApp = await getFirebaseApp();
  const auth = getAuth(firebaseApp);
  return signInWithPopup(auth, provider);
}
