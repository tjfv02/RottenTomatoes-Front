import { AppBar, Box, Divider, Grid, Stack, Toolbar, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NavBarUserMenu } from './NavBarUserMenu';
import logo from '../../assets/rottentomatoes_logo.png';
import { useAuth } from '../../context/auth/AuthContext';
import { IconLogout } from '@tabler/icons-react';
import theme from '../../theme';

const NavBar = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const userId = user?.userName ?? 'Anonimo';
    const userName = user?.name ?? 'Anonimo';

    const handleLogout = async () => {
        await logout();
        navigate('/login', { replace: true });
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="fixed"
                    elevation={2}
                    sx={{
                        backgroundColor: "white",
                        border: 0,
                        color: 'white',
                    }}
                >
                    <Toolbar>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: 101,
                                            height: 20,
                                        }}
                                    />
                                    <Divider orientation="vertical" variant="middle" sx={{ color: 'white' }} />
                                    <Typography color={theme.palette.grey[600]}>RDL</Typography>
                                </Stack>
                            </Grid>

                            <Grid item>
                                <NavBarUserMenu userName={userName} userId={userId} />
                                <IconButton onClick={handleLogout} sx={{ color: theme.palette.secondary.main, marginLeft: 2 }}>
                                    <IconLogout />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default NavBar;
