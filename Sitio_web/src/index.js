import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos generales
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición de rendimiento de React
reportWebVitals();