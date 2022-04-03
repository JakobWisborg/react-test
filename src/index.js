import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Navbar from './components/Navbar/Navbar';
import MiddleNav from '../../../components/Middle-nav-services/MiddleNav';
import Footer from './components/Footer/Footer';

import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      <MiddleNav />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

