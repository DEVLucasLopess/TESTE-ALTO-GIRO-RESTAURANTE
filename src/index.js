import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CookiesProvider } from 'react-cookie';

import { store, persistor } from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);