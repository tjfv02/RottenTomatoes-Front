import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      dark: "#1E88E5",
      light: "#EEF2F6",
      200: "#90CAF9",
      800: "#1565C0",
    },
    secondary: {
      main: "#D32F2F",    // Rojo principal
      dark: "#C62828",    // Rojo oscuro
      light: "#FFCDD2",   // Rojo claro
      200: "#FF8A80",     // Rojo 200
      800: "#B71C1C",     // Rojo 800
    },
    success: {
      main: "#00E676",
      dark: "#00C853",
      light: "#B9F6CA",
      200: "#69F0AE",
    },
    error: {
      main: "#F44336",
      dark: "#C62828",
      light: "#EF9A9A",
    },
    warning: {
      main: "#FFE57F",
      dark: "#FFC107",
      light: "#FFF8E1",
    },
    grey: {
        50: "#F8FAFC",
        100: "#EEF2F6",
        200: "#EEEEEE",
        300: "#E0E0E0",
        500: "#697586",
        600: "#121926",
        700: "#364152",
        900: "#121926",
      },
  },
});

export default theme;
