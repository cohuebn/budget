import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#049628",
    },
    secondary: {
      main: "#EEC170",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(2,137,75)",
          background:
            "linear-gradient(115deg, rgba(2,137,75,1) 35%, rgba(8,144,82,1) 100%)",
        },
      },
    },
  },
});

export default theme;
