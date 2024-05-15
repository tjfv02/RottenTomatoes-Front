import { Typography } from "@mui/material";
import AuthLogin from "./pages/Auth/AuthLogin";
import AuthRegister from "./pages/Auth/AuthRegister";

const App = () => {
  return (
    <>
      <Typography variant="h4"> Rotten Tomatoes </Typography>
      <AuthRegister/>
      <AuthLogin/>

    </>
  );
};

export default App;
