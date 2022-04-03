import React from "react";
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import './css/Services.css';
import './css/AllViews.css';

const Services = () => {

    let [hourCount, setHourCount] = useState(0);
    let [hourCost, setHourCost] = useState(950);
    let displayMessage = "";

    const addHour = (event) => {
        event.preventDefault();
        setHourCount(
            hourCount = parseInt(hourCount + 1)
        );
        updateHourCost();
    };

    const removeHour = (event) => {
        event.preventDefault();
        if(hourCount > 0){
            setHourCount(
                hourCount = parseInt(hourCount - 1)
            );
        } else {
            hourCount = 0;
        }
        updateHourCost();
    };

    function updateHourCost(){
        if (hourCount >= 20){
            setHourCost(
                hourCost = parseInt(750)
            );
        } else if (hourCount >= 10){
            setHourCost(
                hourCost = parseInt(850)
            );
        } else {
            setHourCost(
                hourCost = parseInt(950)
            );
        }
    }
    

    useEffect(() => {
    });

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

            
            




            <button className="Services-set-hours-btn Services-remove-hour"
                    onClick={removeHour}>-</button>
            <div className="Services-hour-cost">Antal timmar: { hourCount } &nbsp; { hourCost } kr / timmen</div>
            <button 
                className="Services-set-hours-btn Services-add-hour"
                onClick={addHour}
            >+</button>
            {displayMessage}
            <br/><br/>
            <ul>
                <li>
                    1x timme kostar 950:-
                </li>
                <li>
                    10x timmar kostar 850:- (850 * 10) (Du tjänar 100 kronor per timma!)
                </li>
                <li>
                    20x timmar kostar 750:- (850 * 10) (Du tjänar 200 kronor per timma!)
                </li>
            </ul>
        </div>
    )
    
};
export default Services;