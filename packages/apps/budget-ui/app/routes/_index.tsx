import { V2_MetaFunction, redirect } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Budge It" }];
};

export const loader = async () => {
  return redirect("/dashboard");
};
