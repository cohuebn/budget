import { getFirebaseAdminAuth } from "@budget/firebase";
import { createLogger } from "@budget/core";

import { demoUser } from "./demo-data/users";

const logger = createLogger("firebase-users");

export async function addDemoUserToFirebase() {
  const auth = getFirebaseAdminAuth();
  await auth.createUser(demoUser);
  logger.info({ userId: demoUser.uid }, "Added demo user to Firebase");
}
