import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <>
    <Header />
    <Outlet /> {/* renders matched child route */}
  </>
);

export default MainLayout;
