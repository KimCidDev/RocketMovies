import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { AuthProvider } from './hooks/auth';

// While !routes
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
    <Routes />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
