import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const colors = {
  background: "#02894b",
  primary: "#016046",
  text: "#ffffff",
  error: red.A400,
  charts: {
    borderColor: "#b2beb5",
    series: [
      "rgba(75, 192, 192, 0.7)",
      "rgba(255, 99, 132, 0.7)",
      "rgba(153, 102, 255, 0.7)",
      "rgba(255, 159, 64, 0.7)",
      "rgba(201, 203, 207, 0.7)",
      "rgba(255, 205, 86, 0.7)",
      "rgba(54, 162, 235, 0.7)",
    ],
  },
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
          backgroundImage: "linear-gradient(115deg, rgba(2,137,75,1) 35%, rgba(4,145,81,1) 100%)",
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
