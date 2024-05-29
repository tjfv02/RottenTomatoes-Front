import { Button, Container, Divider, Stack, Typography } from "@mui/material"
import logo from "../../assets/rottentomatoes_logo.png"
import { useNavigate } from "react-router-dom";
import theme from "../../theme";

const NotFoundPage = () => {
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
        <Typography color='secondary.dark' variant="h3">Parece que hay un error!</Typography>
        <Divider />
        <Typography color='secondary'>La página no se encuentra en ninguna parte.</Typography>
        <Button
            variant="contained"
          onClick={() => {
            navigate(`/`);
          }}
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          Regresar a inicio
        </Button>
      </Stack>
    </Container>
  );
}

export default NotFoundPage