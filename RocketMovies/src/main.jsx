import React from 'react';
import ReactDOM from 'react-dom/client';

// While !routes
import { Home } from './pages/Home/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
