import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from './pages/Header';
import AboutPage from './pages/AboutPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <AboutPage/>
  </StrictMode>
);
