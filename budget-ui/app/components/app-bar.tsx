import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar>
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
      </Toolbar>
    </MuiAppBar>
  );
}
