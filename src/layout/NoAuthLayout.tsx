import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

export const NoAuthLayout: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="HomePage" />;
  }

  return <Outlet />;
};
