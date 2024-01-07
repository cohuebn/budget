import { CreateRequest } from "firebase-admin/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { MongoDemoData } from "./types";

export const demoUser: CreateRequest = {
  uid: "8048e6c4-6e0b-419d-ab89-ff496821261a",
  email: "demo.user@demodomain.com",
  emailVerified: true,
  displayName: "Demo User",
  password: "kick-the-tires",
};

const googleAuthProvider = new GoogleAuthProvider();
export const demoGoogleUser: CreateRequest = {
  uid: "1a220484-89e4-45a9-a491-e98c80117165",
  email: "demo.google.user@gmail.com",
  emailVerified: true,
  displayName: "Demo Google User",
  password: "kick-the-tires",
  providerToLink: googleAuthProvider,
};

export const users: MongoDemoData = {
  collection: "users",
  documents: [
    { _id: demoUser.uid, username: "demo.user@demodomain.com", updatedAt: new Date() },
    { _id: demoGoogleUser.uid, username: "demo.google.user@gmail.com", updatedAt: new Date() },
  ],
};
