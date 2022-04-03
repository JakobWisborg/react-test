import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import App from './App';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Services from './views/Services';
import About from './views/About';
import Contact from './views/Contact';
import Training from './views/Training';
import Treatment from './views/Treatment';
import Conversation from './views/Conversation';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/training" element={<Training/>} />
          <Route path="/services/treatment" element={<Treatment/>} />
          <Route path="/services/conversation" element={<Conversation/>} />
        </Routes> 
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

