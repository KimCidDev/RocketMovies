  import { createGlobalStyle } from 'styled-components';

  export default createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${({ theme }) => theme.COLORS.PURPLE_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
      -webkit-font-smoothing: antialiased;
    }

    body, p, textarea {
      font-family: 'Spectral', serif;
      font-size: 16px;
    }

    input {
      font-family: 'Spectral', serif;
      font-weight: 700;
      font-size: 14px;
      border-radius: 10px;
    }

    button, a {
      font-family: 'Spectral', serif;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      border-radius: 10px;
    }

    button:hover, a:hover {
      filter: brightness(0.97);
    }


  `;
