/** @module Router */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserSelector } from '../components/UserSelector';
import { Dashboard } from '../components/Dashboard';

/**
 * Returns a router
 *
 * @returns {React.ReactElement}
 */
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSelector />} />
        <Route path="/user/:userId" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
