import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import GuestLayout from '../components/Layouts/GuestLayout';
import { ROUTES } from '../constants';

function Routing() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path={ROUTES.DASHBOARD_PATH} element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
