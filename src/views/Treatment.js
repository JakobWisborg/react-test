import React from "react";
import './css/Treatment.css';
import BokaBtn from "../components/BokaBtn/BokaBtn";
import MiddleNav from "../components/Middle-nav-services/MiddleNav";

const Treatment = () => {
    
    return (
        <div>
            <div className="Treatment">
                <div class="aside-text-white"> 
            
                    <span>
                        <h1> BEHANDLING </h1>

                    <h2>Massage</h2> 
                    <p>Friskvårdsmassage, för dig som önskar en skön avkoppling. Helkropp eller önskad kroppsdel.</p>
                    <BokaBtn />
                    
                    <br/>

                    <h2>Fasciabehandling</h2> 
                    <p>För dig som har smärta eller stelhet. Behandlingen ger ett ökat flöde i vår vävnad 
                        vilket skapar rörelsefrihet. Ibland behöver vi hjälpa kroppen på traven när vi 
                        märker att vi hindras att träna som vi vill pga smärta eller stelhet. Denna behandling 
                        innehåller 45min behandling och 15 minuter rörelser samt tips på hur du kan jobba med 
                        egenbehandling på egen hand.</p>
                    <BokaBtn /> 
                    </span>
                </div>

                

            </div>
            <MiddleNav />
        </div>
    )
    
};
export default Treatment;