import { Container } from "@mui/material";
import MiniDrawer from "./NavBar/MiniDrawer";

const Layout: React.FC<object> = () => {
    return (
        <Container >
            <MiniDrawer />
        </Container>
    );
};

export default Layout;
