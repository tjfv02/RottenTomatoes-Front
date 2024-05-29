import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from '../../interfaces/Auth';
import TextFieldWrapper from '../../components/general/TextFieldWrapper';
import ButtonWrapper from '../../components/general/ButtonWrapper';
import LoadingWrapper from '../../components/general/LoadingWrapper';
import NotificationsWrapper from '../../components/general/NotificationsWrapper';
import { useState } from 'react';

import logo from '../../assets/rottentomatoes_logo.png';
import { useAuth } from '../../context/auth/AuthContext';
import { loginValidationSchema } from '../../schemas/validations/authValidations';
import theme from '../../theme';
import { AlertOptions } from '../../interfaces/Queries';

const AuthLogin = () => {
  const navigate = useNavigate();
  const initialValues: LoginFormValues = { username: '', password: '' };
  const { login, isLoading } = useAuth();


  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    open: false,
    autoHideDuration: 3000,
    severity: 'success',
    message: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: LoginFormValues, { resetForm }: any) => {
    try {
      await login({
        username: values.username,
        password: values.password,
      });

      setAlertOptions({
        open: true,
        autoHideDuration: 3000,
        severity: 'success',
        message: 'Inicio de sesión exitoso',
      });
    } catch (error) {
      console.error('Failed to login', error);
      resetForm();
      setAlertOptions({
        open: true,
        autoHideDuration: 6000,
        severity: 'error',
        message: 'Usuario o Contraseña incorrecta',
      });
    }
  };

  const handleClose = () => {
    setAlertOptions({
      open: false,
      autoHideDuration: 3000,
      severity: 'info',
      message: '',
    });
  };

  return (
    <>
      <LoadingWrapper isLoading={isLoading} />
      <NotificationsWrapper
        open={alertOptions.open}
        severity={alertOptions.severity}
        message={alertOptions.message}
        autoHideDuration={alertOptions.autoHideDuration}
        onClose={handleClose}
      />
      <Container maxWidth='xs'>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          mt={8}
          p={2}
          sx={{ bgcolor: 'white', borderRadius: 2 }}
        >
          <Stack direction='column' spacing={2}>
                  <Typography
                    variant='h5'
                    color='secondary.dark'
                    mt={2}
                    textAlign='center'
                    fontWeight='Bold'
                  >
                    Iniciar Sesión
                  </Typography>
            <Grid container
              spacing={0}
              direction='column'
              alignItems='center'
              justifyContent='center'
            >
              <Grid item xs={3}>
                <Box
                  component='img'
                  sx={{
                    height: 60,

                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt='Logo'
                  src={logo}
                />
              </Grid>
            </Grid>

            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              <Form>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='username'
                      {...{ label: 'Usuario' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='password'
                      {...{ label: 'Contraseña', type: 'password' }}
                    />
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Typography
                      variant='subtitle1'
                      color='secondary.dark'
                      align='right'
                      mb={2}
                      sx={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      Olvidó la contraseña?
                    </Typography>
                    <Box textAlign={'center'}>
                      <ButtonWrapper {...{ variant: 'contained', type: 'submit' }}>
                        Iniciar Sesión
                      </ButtonWrapper>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
            <Divider />
            <Typography
              variant='subtitle1'
              color={theme.palette.grey[500]}
              mb={2}
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => navigate('/SignUp')}
              textAlign='center'
            >
              No tienes una cuenta?
            </Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AuthLogin;
