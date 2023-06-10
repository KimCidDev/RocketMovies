import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// While !routes
import { AppRoutes } from './routes/app.routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRoutes />

    </ThemeProvider>
  </React.StrictMode>,
)
