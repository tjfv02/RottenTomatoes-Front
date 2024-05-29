import React, { useEffect, useState } from 'react';
import {
    Avatar, Stack,
    Typography,
    Button, Tooltip
} from '@mui/material';
import defaultpp from '../../assets/user-round.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


type NavBarUserMenuProp = {
    userName: string;
    userId: string;
};

export const NavBarUserMenu: React.FC<NavBarUserMenuProp> = ({ userName, userId }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();
    // const { logout } = useAuth();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        navigate('/profile');
    };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const [profilePhoto, setProfilePhoto] = useState<string>(defaultpp);

    const checkImageUpdate = () => {
        axios.head(`${import.meta.env.VITE_API_URL}/user/photo/${userId}`)
        .then((response) => {
          if (response.status === 200) {
            setProfilePhoto(`${import.meta.env.VITE_API_URL}/user/photo/${userId}`)
          }
          else{
            setProfilePhoto(defaultpp);
          }
        })
        .catch((error) => {
          console.error('Error al cargar la imagen', error);
          setProfilePhoto(defaultpp);
    
        });
      };
    
    
        useEffect(() => {
          checkImageUpdate()
        //   const interval = setInterval(checkImageUpdate, 5000);
        //   return () => clearInterval(interval);
        }, [])
 

    return (
        <>
            <Tooltip title='Mi Perfil'>
                <Button
                    id='user-nav-button'
                    aria-controls={open ? 'user-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant='text'
                    sx={{ color: 'white' }}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                        alignItems='center'
                    >
                        <Avatar
                            alt={userName}
                            src={profilePhoto}
                        />
                        <Typography
                            sx={{
                                color: "black",
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                },
                            }}
                        >
                            {userName}
                        </Typography>
                    </Stack>
                </Button>
            </Tooltip>
            
        </>
    );
};
