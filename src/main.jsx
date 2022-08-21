import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

(async () => {
  if (import.meta.env.MODE === 'mocking') {
    const {worker} = await import("./mocks/browser");
    worker.start();
  }
})();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
