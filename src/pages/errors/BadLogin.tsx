import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/rottentomatoes_logo.png"
import Badlogin from '../../assets/svg/Badlogin.svg';
import theme from '../../theme';

export const BadLoginPage = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bg: 'primary',
                backgroundColor: 'primary',
            }}
        >
            <Container
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <img
                        src={Logo}
                        alt='canella logo full'
                        style={{
                            width: '300px',
                        }}
                    />
                    <Paper
                        sx={{
                            width: '400px',
                            maxWidth: '90%',
                            p: 2,
                        }}
                    >
                        <Stack
                            spacing={1}
                            sx={{ alignItems: 'center' }}
                        >
                            <Typography color='secondary.dark' variant='h6'>ERROR AL INICIAR SESIÓN</Typography>
                            <img
                                src={Badlogin}
                                alt='login failed'
                                style={{
                                    width: '49%',
                                    marginTop: '24px',
                                    marginBottom: '24px',
                                }}
                            />
                            <Typography color='secondary.main' variant='caption'>
                                Se ha producido un error al intentar iniciar sesión.
                            </Typography>
                            <Button
                                onClick={() => navigate('/')}
                                fullWidth
                                variant='contained'
                                style={{ backgroundColor: theme.palette.secondary.main }}

                            >
                                Intentar de nuevo
                            </Button>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Box>
    );
};
