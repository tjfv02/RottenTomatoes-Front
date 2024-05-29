import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { AppRouter } from "./Router";
import { AuthProvider } from "./context/auth/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
