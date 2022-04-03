import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <header>
        <footer>
            <span> Kontakta mig</span>
            <p>E-post: <a href="mailto:mikaelabischoff@gmail.com">mikaelabischoff@gmail.com</a></p>
            <br/>
            <span>Sociala medier</span>
            <p> Instagram: <a href="https://www.instagram.com/mikaela.bischoff/" target="_blank">mikaela.bischoff</a></p>
            <p> Facebook: <a href="https://www.facebook.com/coachmikaelabischoff" target="_blank">coachmikaelabischoff</a></p>
        </footer>
      </header>
    );
  };


export default Footer;