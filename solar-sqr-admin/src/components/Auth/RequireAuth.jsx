import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const token = localStorage.getItem('token'); // or use any flag you save after login

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
