import { Link } from "react-router-dom";
import "./Navbar.css";
import HBMenu from "../../symbols/menu.svg";
import React from "react";
import Services from '../../views/Services';

const Navbar = () => {
    return (
      <header>
        <nav className="nav-color nav-top">
          <input type="checkbox" id="check"></input>  
          <label htmlFor="check"><img src={ HBMenu } className="nav-hbmenu"/></label>
          {/* <a href="index.html"><label className="logo font">Mikaela Bischoff</label></a> */}
          <Link className="nav-logo-font" to="/">Mikaela Bischoff</Link>

            <ul>
              <li className="nav-items"></li>
              <li><Link to="/about">Om Mig</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
        </nav>
      </header>
    );
  };


export default Navbar;