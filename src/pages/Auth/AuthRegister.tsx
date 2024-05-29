import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { RegisterFormValues } from '../../interfaces/Auth';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { AlertOptions } from '../../interfaces/Queries';
import { useSignUpMutation } from '../../api/slices/authSlice';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import LoadingWrapper from '../../components/general/LoadingWrapper';
import NotificationsWrapper from '../../components/general/NotificationsWrapper';
import { registerValidationSchema } from '../../schemas/validations/authValidations';
import TextFieldWrapper from '../../components/general/TextFieldWrapper';
import ButtonWrapper from '../../components/general/ButtonWrapper';

const AuthRegister = () => {
  const navigate = useNavigate();

  const [signUp, { isLoading, isError, error }] = useSignUpMutation();

  const initialValues: RegisterFormValues = {
    username: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    open: false,
    autoHideDuration: 3000,
    severity: 'success',
    message: '',
  });

  useEffect(() => {
    if (isError) {
      setAlertOptions({
        open: true,
        autoHideDuration: 6000,
        severity: 'error',
        message: `Error: ${error}`,
      });
    }
  }, [error, isError]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: RegisterFormValues) => {
    console.log('Valores Register', values);

    try {
      const action = signUp({
        username: values.username,
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });

      action
        .unwrap()
        .then(() => {
          setAlertOptions({
            open: true,
            autoHideDuration: 3000,
            severity: 'success',
            message: 'Inicio de sesión exitoso',
          });
          navigate('/SuccessfulSignUp');
        })
        .catch((error) => {
          console.log(error);
          setAlertOptions({
            open: true,
            autoHideDuration: 6000,
            severity: 'error',
            message: 'Usuario o Contraseña incorrecta',
          });
        });
    } catch (err) {
      alert('Error en contraseña');
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
          <Stack direction={'column'} spacing={2}>
            <Typography
              fontWeight='bold'
              textAlign='center'
              variant='h5'
              color={'secondary.dark'}
              mt={2}
            >
              Registro
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid
                  container
                  spacing={2}
                  alignContent={'center'}
                  justifyContent={'center'}
                  mt={2}
                >
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='username'
                      {...{ label: 'Usuario' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='email'
                      {...{ label: 'Correo', type: 'email' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper name='name' {...{ label: 'Nombre' }} />
                  </Grid>
                  <Grid item xs={12}>
                    {/* ELIMINAR */}
                    <TextFieldWrapper
                      name='lastName'
                      {...{ label: 'Apellido' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='password'
                      {...{ label: 'Contraseña', type: 'password' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      name='confirmPassword'
                      {...{ label: 'Confirma contraseña', type: 'password' }}
                    />
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <Box textAlign='center'>
                      <ButtonWrapper {...{ variant: 'contained', type: 'submit' }}>
                        Registrar
                      </ButtonWrapper>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
            <Divider />
            <div onClick={() => navigate('/')}>
              <Typography
                variant='subtitle1'
                color={theme.palette.grey[500]}
                textAlign='center'
                mb={2}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                Ya tienes una cuenta?
              </Typography>
            </div>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default AuthRegister;
