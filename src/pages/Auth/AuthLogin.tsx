// src/components/AuthLogin.tsx

import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { loginValidationSchema } from '../../schemas/validations/yupValidations';
import { LoginFormValues } from '../../interfaces/Auth';




const AuthLogin: React.FC = () => {
  const initialValues: LoginFormValues = { email: '', password: '' };

  const handleSubmit = (values: LoginFormValues) => {
    console.log('Login successful', values);
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default AuthLogin;
