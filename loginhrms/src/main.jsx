// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` in React 18+
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Create a root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root container
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);