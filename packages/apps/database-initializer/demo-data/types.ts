import { Document } from "mongodb";

export type MongoDemoData = {
  collection: string;
  documents: Document[];
};
