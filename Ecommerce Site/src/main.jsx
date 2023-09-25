import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom

import App from './App'; // Import your main App component

// Find the root element in your HTML where you want to render your app
const rootElement = document.getElementById('root');

// Use createRoot to render your app
const root = createRoot(rootElement);

// Start rendering your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
