import {
  IconButton,
  Typography,
  Box,
  Drawer,
  styled,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Menu } from "@mui/icons-material";
import { useState } from "react";

import { CurrentUser } from "./current-user";
import { Link } from "./link";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function AppMenu() {
  const theme = useTheme();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

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
        onClick={() => setMenuDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" variant="persistent" open={menuDrawerOpen}>
        <Box sx={{ width: 250 }}>
          <DrawerHeader>
            <IconButton onClick={() => setMenuDrawerOpen(false)} color="inherit">
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </DrawerHeader>
          <List>
            <ListItem>
              <Link to="/dashboard">Dashboard</Link>
            </ListItem>
            <ListItem>
              <Link to="/budget">Manage Budget</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">Budge It</Link>
      </Typography>
      <CurrentUser />
    </Box>
  );
}
