import * as React from "react";

import { AppMenu } from "./components/app-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AppMenu></AppMenu>
      {children}
    </main>
  );
}
