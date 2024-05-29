import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

export const AuthLayout: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return <Outlet />;
};
