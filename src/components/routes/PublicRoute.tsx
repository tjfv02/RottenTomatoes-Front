import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';

const PublicRoute: React.FC = () => {
  const { user } = useAuth();

  return user ? <Navigate to="HomePage" replace /> : <Outlet />;
};

export default PublicRoute;
