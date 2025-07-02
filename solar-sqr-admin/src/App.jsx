import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected pages inside layout with header */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
