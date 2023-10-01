import { CreateRequest } from "firebase-admin/auth";

import { MongoDemoData } from "./types";

export const demoUser: CreateRequest = {
  uid: "8048e6c4-6e0b-419d-ab89-ff496821261a",
  email: "demo.user@demodomain.com",
  emailVerified: true,
  displayName: "Demo User",
  password: "kick-the-tires",
};

export const users: MongoDemoData = {
  collection: "users",
  documents: [{ _id: demoUser.uid, username: "demo-account", updatedAt: new Date() }],
};
