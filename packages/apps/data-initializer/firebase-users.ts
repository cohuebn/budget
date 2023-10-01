import { getFirebaseAdminAuth } from "@budget/firebase";
import { createLogger } from "@budget/core";

import { demoUser } from "./demo-data/users";

const logger = createLogger("firebase-users");

async function findUser(uid: string) {
  const auth = getFirebaseAdminAuth();
  try {
    return await auth.getUser(uid);
  } catch (err: unknown) {
    logger.debug({ uid, err }, "Demo user not found");
    return null;
  }
}

export async function addDemoUserToFirebase() {
  const auth = getFirebaseAdminAuth();
  const { uid } = demoUser;
  if (!uid) throw new Error("Expected the demo user to have a specified uid");
  const existingUser = await findUser(uid);
  if (existingUser) {
    await auth.updateUser(uid, demoUser);
  } else {
    await auth.createUser(demoUser);
  }
  logger.info({ userId: demoUser.uid }, "Ensured demo user is in Firebase");
}
