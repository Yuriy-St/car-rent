import '../node_modules/modern-normalize/modern-normalize.css';
import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';
import globalStyles from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/car-rent/">
    <Global styles={globalStyles} />
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);
