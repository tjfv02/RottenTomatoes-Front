import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Container, Paper } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <Paper>
        <App />
      </Paper>
    </Container>
  </React.StrictMode>
);
