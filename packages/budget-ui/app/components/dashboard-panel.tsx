import { Box, Paper, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type DashboardPanelProps = PropsWithChildren & {
  title: string;
};

export function DashboardPanel({ title, children }: DashboardPanelProps) {
  return (
    <Paper sx={{ padding: "32px", height: "100%" }}>
      <Typography variant="h4" textAlign="center">
        {title}
      </Typography>
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
    </Paper>
  );
}
