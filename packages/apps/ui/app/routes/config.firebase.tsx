import { json } from "@remix-run/node";
import { getFirebaseOptionsFromEnvironment } from "@budget/firebase";

export async function loader() {
  return json(getFirebaseOptionsFromEnvironment());
}
