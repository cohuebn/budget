import { Avatar, Button } from "@mui/material";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

import { signInWithGoogle } from "~/firebase/auth";
import { getSessionUser, setSessionUser } from "~/utils/user-session";

export function CurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const sessionUser = getSessionUser();
    if (currentUser?.email !== sessionUser?.email) {
      setCurrentUser(sessionUser);
    }
  });

  async function handleGoogleSignin() {
    const { user } = await signInWithGoogle();
    setSessionUser(user);
    setCurrentUser(user);
  }

  if (!currentUser) {
    return (
      <Button color="inherit" onClick={() => handleGoogleSignin()}>
        Login
      </Button>
    );
  }

  return (
    <Avatar
      alt={currentUser.displayName ?? undefined}
      src={currentUser.photoURL ?? undefined}
    />
  );
}
