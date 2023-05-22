import type { V2_MetaFunction } from "@remix-run/node";

import { AppBar } from "~/components/app-bar";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Budge It" }];
};

export default function Index() {
  return (
    <div>
      <AppBar></AppBar>
    </div>
  );
}
