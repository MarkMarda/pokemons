import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Pokemon from './Pokemon';
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Pokemon />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
