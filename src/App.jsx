import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { defaultTheme } from './themes';
import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}
