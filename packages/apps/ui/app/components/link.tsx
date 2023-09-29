import { useTheme } from "@mui/material";
import { Link as RemixLink } from "@remix-run/react";
import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren & {
  to: string;
};

export function Link(props: LinkProps) {
  const theme = useTheme();

  return (
    <RemixLink style={{ color: theme.palette.text.primary, textDecoration: "none" }} to={props.to}>
      {props.children}
    </RemixLink>
  );
}
