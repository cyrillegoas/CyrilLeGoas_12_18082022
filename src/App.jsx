import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { defaultTheme } from './themes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>HELLO</h1>
    </ThemeProvider>
  );
}
