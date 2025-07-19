import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {unregister as serviceWorkerRegistration} from './serviceWorkerRegistration';

// Import your global styles (if you have them)
import './styles/global.css'; // optional line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 🟢 The correct way to disable service worker and prevent MIME type errors:
serviceWorkerRegistration.unregister();
