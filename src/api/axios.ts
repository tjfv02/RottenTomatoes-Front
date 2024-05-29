import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Access-Token': localStorage.getItem('sesion-token') ?? '',
    'X-User': localStorage.getItem('userId') ?? '',
  },
});

const logout = () => {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('sesion-token');
    window.localStorage.removeItem('refresh-token');
    window.localStorage.removeItem('userId');
    location.href = '/login';
};

axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes agregar aquí la lógica de los encabezados de autenticación, por ejemplo
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores globales
    if (error.response.status === 401) {
      // Redirigir al login u otras acciones
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
