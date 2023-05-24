import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const colors = {
  background: "#02894b",
  primary: "#016046",
  text: "#ffffff",
  error: red.A400,
};

const theme = createTheme({
  palette: {
    text: {
      primary: colors.text,
    },
    primary: {
      main: colors.primary,
    },
    error: {
      main: colors.error,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
          backgroundImage:
            "linear-gradient(115deg, rgba(2,137,75,1) 35%, rgba(4,145,81,1) 100%)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation: {
          backgroundColor: colors.primary,
        },
      },
    },
  },
});

export default theme;
