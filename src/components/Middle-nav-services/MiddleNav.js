import { Link } from "react-router-dom";
import "./MiddleNav.css";
import React from "react";
import { useState } from 'react';

import Training from '../../views/Training';
import Treatment from '../../views/Treatment';
import Conversation from '../../views/Conversation';

const MiddleNav = () => {

    return (
      <div className="middle-nav-margin-padding">
        <section className="mid-content-services">
          <Link to="/services/training"><div className="item"><p className="font">Träning</p></div></Link>
          <Link to="/services/treatment"><div className="item "><p className="font">Behandling</p></div></Link> 
          <Link to="/services/conversation"><div className="item"><p className="font">Samtal</p></div></Link>           
        </section>
      </div>
    );
  };


export default MiddleNav;