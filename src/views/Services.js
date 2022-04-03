import React from "react";
import ReactDOM from 'react-dom';
import MiddleNav from "../components/Middle-nav-services/MiddleNav";
import './css/Services.css';
import './css/AllViews.css';
import Calculator from "../components/Calculator/Calculator";

const Services = () => {

    

        // function handleClick(e) {    e.preventDefault();    console.log('The link was clicked.');  }

    
    return (
        <div className="App">
            <section className="background-image">
                <div className="background-overlap-text">   
                    <span>
                    <h2> Få en kostnadsfri konsultation redan idag!</h2>
                    <span>
                        <p> Med mig kan planera din träning, få träningsprogram, 
                        prata om hälsa och få idrottspsykologisk rådgivning!</p>
                    </span>
                    </span>
                </div>
            </section>

            <MiddleNav />
            <Calculator />
            
        </div>
    )
    
};
export default Services;