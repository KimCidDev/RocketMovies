import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// While !routes
import { Profile } from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Profile />

    </ThemeProvider>
  </React.StrictMode>,
)
