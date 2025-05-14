// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure Tailwind is set up correctly in this file
import App from './App.jsx';
import { ThemeProvider } from "@material-tailwind/react"; 
import "./index.css"; // <-- Tailwind styles
import "@fontsource/ibm-plex-sans"; // This will load the IBM Plex Sans font


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
