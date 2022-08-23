import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { defaultTheme } from './themes';
import { Header } from './components/Header';
import { Router } from './routes/Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Router />
    </ThemeProvider>
  );
}
