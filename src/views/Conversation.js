import React from "react";
import './css/Conversation.css';
import BokaBtn from "../components/BokaBtn/BokaBtn";
import MiddleNav from "../components/Middle-nav-services/MiddleNav";

const Conversation = () => {
    
    return (
        <div>
            <div className="Conversation">                   
                <span>
                <h1> SAMTAL  </h1>

                <h2>Hälsocoaching </h2> 
                <p>För dig som vill ha vägledning i beteendeförändring, nå din fulla potential eller personlig utveckling. Coaching går att 
                    applicera på alla områden där du vill uppnå förändring i ditt liv - personligen, hälsan, relationer eller arbete. 
                    Coaching skapar motivation och aktion! </p>
                <BokaBtn />
                <br/>

                <h2>Idrottspsykologisk rådgivning</h2> 
                <p>För dig som är idrottare eller tränare och vill utvecklas i din sport. Målsättning, motivation, prestationsångest, självmedkänsla 
                    eller fokus är exempel på några områden att arbeta med. Vi är duktiga på att träna vår fysisk, men mental träning glömmer vi ofta - 
                    vilket är ironisk då det är en stor del av idrottens prestation och välmående. </p>
                <BokaBtn /> <br/>

                <h2>Kostanalys</h2>
                <p>För dig som är idrottare och vill ha hjälp med att optimera ditt intag för välmående och prestation. 
                    Många idrottare har svårt att få i sig den mängd energi och näring som krävs för att prestera och må 
                    på topp. Vi gör en 3-dagars mat- och aktivitetsdagbok för att få en översikt på hur du äter i förhållande till din träningsmängd. </p>
                
                <p>För dig som ät motionär och vill få en genomgång i grundprinciperna till en hälsosam kosthållning. Vi går igenom hur din kosthållning ser ut och gör en plan för att skapa bra enkla rutiner som gör dig mätt och pigg</p>

                </span>    
            </div>
            <MiddleNav />
        </div>
        
    )
    
};
export default Conversation;