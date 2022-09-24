/** @module App */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { Theme } from './themes';
import { Header } from './components/Header';
import { Router } from './routes/Router';

/**
 * Returns an app made of a header and a router
 *
 * @returns {React.ReactElement}
 */
export function App() {
  return (
    <ThemeProvider theme={Theme.default}>
      <GlobalStyles />
      <Header />
      <Router />
    </ThemeProvider>
  );
}
