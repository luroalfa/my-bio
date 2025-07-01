import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
    background: linear-gradient(135deg, #f0f4f8, #eaf0f6);
    color: #111;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
