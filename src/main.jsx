import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Authprovider from './context/Authprovider.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </React.StrictMode>
);
