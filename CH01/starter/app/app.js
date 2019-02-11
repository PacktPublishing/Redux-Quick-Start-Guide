// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

import configureStore from './configureStore';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE,
  );
};

render();
