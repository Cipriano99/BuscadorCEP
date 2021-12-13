import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './pages/Layout';

import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
