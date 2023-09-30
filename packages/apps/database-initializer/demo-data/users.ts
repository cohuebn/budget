import { MongoDemoData } from "./types";

export const users: MongoDemoData = {
  collection: "users",
  documents: [{ _id: "todo", username: "demo-account", updatedAt: new Date() }],
};
