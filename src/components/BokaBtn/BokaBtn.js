import { Link } from "react-router-dom";
import React from "react";
import './BokaBtn.css';
import { useEffect, useState } from "react";

const BokaBtn = () => {

  

    return (
      <div className="bokaBtn">
         <a href="https://calendly.com/mikaelabischoff" target="_blank" className="btn-boka">Boka</a>
      </div>
     
    );
  };


export default BokaBtn;