import React from "react";
import './css/Training.css';
import BokaBtn from '../components/BokaBtn/BokaBtn';
import MiddleNav from '../components/Middle-nav-services/MiddleNav';


const Training = () => {
    
    return (
        <div>
            <div className="Training">
                  
                <h1> TRÄNING </h1>
                <h3>För dig som vill ha hjälp att nå dina träningsmål.</h3> 
                <p>Utifrån olika tester och dina egna önskemål sätter vi en målsättning och en plan. 
                Passar både dig som är träningsvan eller nybörjare. </p>
                <div className="training-center"><BokaBtn /></div>
                <strong>Min filosofi är att skapa en kropp som är funktionell - vilket för mig innebär:</strong>

                <ul>
                <li>klara det som du vill utföra i vardagen </li>
                <li>känna dig så stark, smidig och lätt i kroppen</li>
                <li>känna dig obegränsad</li>
                <li>att successivt utmana din kropp mer och mer i flås, styrka och rörlighet </li>
                <li>utifrån dina förutsättningar komma våra grundrörelser så nära som möjligt - det kroppen är designad att göra: gå, springa, krypa, lyfta, pressa, dra, klättra hänga, rotera, sitta på huk med mera
                </li>
                </ul>
                <p>Vi jobbar med rörelser med kroppen som belastning, gummiband, hantlar och bollar. På så sätt kan vi jobba med varierade rörelser i olika hastighet, djup, vikter och riktningar. Grunden är att kroppen jobbar som en enhet för att klara av olika uppgifter i vardagen. Därmed ska vi se till att de övningar vi utför på gymmet liknar dessa rörelsemönster. </p>

                <strong>Olika alternativ:</strong>
                <ul>
                <li>Individuell träning (1st)</li>
                <li>PT-duo (2 st)</li>
                <li>PT small group (3-6st)</li>
                <li>Fysträning (idrottslag)</li>
                <li>Online-program</li>
                </ul>
                <br/>
                <strong>Detta ingår vid träningspack:</strong> 
                <p>En hälsoanalys och 2 uppföljningar á 30 minuter, för att optimera resultaten så arbetar vi även men hälsocoaching vid sidan av träningen.</p>
                
                <div className="training-center"><BokaBtn /></div>
            </div>

            <MiddleNav />
                 
                      
        </div>
        
    )
    
};
export default Training;