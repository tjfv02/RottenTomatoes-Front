import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  username: Yup.string().required("El nombre de usuario es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});

export const registerValidationSchema = Yup.object({
  username: Yup.string().required("El nombre de usuario es requerido"),
  name: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El Apellido es requerido"),
  email: Yup.string()
    .email("Email no válido")
    .required("El email es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ''], "Las contraseñas deben coincidir")
    .required("La confirmación de la contraseña es requerida"),
  countryId: Yup.number(),
});

