import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';

// While !routes
import { Home } from './pages/Home/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
