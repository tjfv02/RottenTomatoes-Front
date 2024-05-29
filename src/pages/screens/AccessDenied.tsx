import { Button, Container, Divider, Stack, Typography } from "@mui/material"
import logo from "../../assets/rottentomatoes_logo.png"
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

const AccessDenied = () => {
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
        <Typography color='secondary.dark' variant="h3">Acceso Denegado</Typography>
        <Divider />
        <Typography color='secondary'>Parece que tu usuario no tiene los permisos necesarios para acceder a esta página.</Typography>
        <Typography color='secondary'>Contacta al administrador.</Typography>
        <Button
            variant="contained"
          onClick={() => {
            navigate(`HomePage`);
          }}
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          Regresar a inicio
        </Button>
      </Stack>
    </Container>
  );
}

export default AccessDenied