import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_600};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, p, input, textarea {
    margin: 10px 0;
    font-family: 'Spectral', serif;
    font-size: 16px;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.97);
  }


`;
