import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Routes, store } from './core';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')

  // for example we could use locale 'i18n' and other providers here
  // use HMR for development
);
