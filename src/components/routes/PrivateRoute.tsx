import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';

interface PrivateRouteProps {
  role?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const { user } = useAuth();

  if (!user) {
    // Redirige a la página de inicio de sesión si no está autenticado
    return <Navigate to="/Login" />;
  }


  // Si el usuario está autenticado y tiene el rol requerido, renderiza el componente hijo
  return <Outlet />;
};

export default PrivateRoute;
