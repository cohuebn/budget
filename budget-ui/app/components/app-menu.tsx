import { IconButton, Typography, Button, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";

export function AppMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Budge It
      </Typography>
      <Button color="inherit">Login</Button>
    </Box>
  );
}
