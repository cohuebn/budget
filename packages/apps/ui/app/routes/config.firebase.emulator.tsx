import { getFirebaseEmulatorConfig } from "@budget/firebase";
import { typedjson } from "remix-typedjson";

export async function loader() {
  return typedjson(getFirebaseEmulatorConfig());
}
