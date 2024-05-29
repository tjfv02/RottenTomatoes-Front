import { Button, Container, Divider, Stack, Typography } from "@mui/material"
import logo from "../../assets/rottentomatoes_logo.png"
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

const RegisterConfirm = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxWidth: "6em",
          }}
        />
        <Typography color='secondary.dark' variant="h3">Registro Completado!</Typography>
        <Divider />
        <Typography color='secondary'>Ya puedes iniciar sesión con tu usuario y contraseña.</Typography>
        <Button
            variant="contained"
          onClick={() => {
            navigate(`/Login`);
          }}
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          Iniciar Sesión
        </Button>
      </Stack>
    </Container>
  );
}

export default RegisterConfirm