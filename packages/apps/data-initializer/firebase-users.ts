import { getFirebaseAdminAuth } from "@budget/firebase-admin";
import { createLogger } from "@budget/core";
import { CreateRequest } from "firebase-admin/auth";

import { demoUser, demoGoogleUser } from "./demo-data/users";

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

export async function addDemoUserToFirebase(userRequest: CreateRequest) {
  const auth = getFirebaseAdminAuth();

  const { uid } = userRequest;
  if (!uid) throw new Error("Expected the demo user to have a specified uid");

  const existingUser = await findUser(uid);
  if (existingUser) {
    await auth.updateUser(uid, userRequest);
  } else {
    await auth.createUser(userRequest);
  }

  logger.info({ userId: demoUser.uid }, "Ensured demo user is in Firebase");
}

export async function addAllDemoUsersToFirebase() {
  await Promise.all([demoUser, demoGoogleUser].map(addDemoUserToFirebase));
}
