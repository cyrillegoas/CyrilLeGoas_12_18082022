import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
 
  :root {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  #root{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  h1,
  h2 {
    font-weight: 500;
  }
`;
