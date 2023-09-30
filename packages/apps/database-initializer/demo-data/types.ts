import { Document, Filter } from "mongodb";

export type DemoData = {
  collection: string;
  documents: Document[];
  documentLocator: (item: Document) => Filter<Document>;
};
