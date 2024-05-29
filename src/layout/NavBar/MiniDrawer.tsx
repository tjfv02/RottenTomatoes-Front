import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../context/auth/AuthContext";
import NavBar from "./NavBar";
import { IconHome } from "@tabler/icons-react";
import { menuLinks } from "./LinksList";

const drawerWidth = 275;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "white",
      borderRight: "none",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "white",
      borderRight: "none",
    },
  }),
}));

const MiniDrawer = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  
  const [selectedIndex, setSelectedIndex] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemClick = (url: string) => {
    setSelectedIndex(url);
    navigate(url, { replace: false });
  };

  const isRoleAdmin = () => user?.role === "Admin";
  const isRoleCustomer = () => user?.role === "Customer";

  const menuItems = isRoleAdmin()
    ? menuLinks["Admin"]
    : isRoleCustomer()
      ? menuLinks["Customer"]
        : [
          {
            title: "Inicio",
            icon: <IconHome />,
            url: "HomePage",
          }

        ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <NavBar />
        </DrawerHeader>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
            <List>
              {menuItems.map(({ title, icon, url }, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  selected={selectedIndex === url}
                  onClick={() => handleListItemClick(url)}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: "primary.main" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ minWidth: "250px", mt: "auto" }} onClick={handleDrawerToggle}>
            <List>
              <ListItem key="ToggleDrawer" disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </ListItemIcon>
                  {open && (
                    <ListItemText primary="Ocultar Menú" sx={{ color: "primary.main" }} />
                  )}
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          mt: 5, // Mueve el contenido hacia abajo
          // ml: 3, // Mueve el contenido hacia la derecha
        }}
      >
        <Box
          sx={{
            p: 2,
            backgroundColor: "background.paper", // Color de fondo del contenido
            borderRadius: 2, // Bordes redondeados
            boxShadow: 3, // Sombra para mejor visibilidad
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MiniDrawer;
