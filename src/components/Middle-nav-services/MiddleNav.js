import { Link } from "react-router-dom";
import "./MiddleNav.css";
import React from "react";


const MiddleNav = () => {
    return (
      <section className="mid-content-services">
        <a href="pt.html"><div class="item item-Träning hover"><p class="font">Träning</p></div></a>
        <a href="behandling.html"><div class="item item-Coachning hover"><p class="font">Behandling</p></div></a> 
        <a href="samtal.html"><div class="item item-Rådgivning hover"><p class="font">Samtal</p></div></a>           
      </section>
    );
  };


export default MiddleNav;