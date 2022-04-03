import React from "react";
import './css/About.css';

import MiddleNav from '../components/Middle-nav-services/MiddleNav';
import ReadMoreReadLess from "../components/ReadMoreReadLess/ReadMoreReadLess";   

const About = () => {
    
    return (
        <div>
            <div className="About">
                <div className="inline">
                    <h2>Vad kul att du hittat hit!</h2>
                    <p> Mitt namn är Mikaela Bischoff och erbjuder hälsotjänster både fysiskt och online. <br/>
                    I grunden är jag utbildad Hälsopedagog med en kandidat i Idrottsvetenskap med inriktning hälsa på Gymnastik och Idrottshögskolan i Stockholm.</p>
                    <p>Jag har idrottat under större delen av mitt liv och därför har jag studerat och fördjupat mig inom hälsosamt och hållbart idrottande. </p>
                    <p>Jag intresserar mig även för kvinnohälsa och har satt mig in i mamma- och gravidträning samt vikten av hormonell balans. Kvinnor som vill skaffa barn ska inte behöva offra sin hälsa eller ge upp sin kropp. </p>
                    <p><b>Min hälsofilosofi </b><br/>
                    Jag hjälper dig som vill förbättra din hälsa fysiskt och mentalt Jag ser kroppen som en enhet där både kroppen och knoppen sitter ihop. 
                    Därför arbetar jag med helhetshälsa för att optimera ditt hälsoarbete. Du kan välj mellan olika tjänster separat eller kombinera dem.</p>
                    <p>Oavsett vad du vill arbeta med kommer jag att involvera hela dig och kartlägga flera områden.</p> 

                </div>
                <div className="inline red">
                    INSERT BILD
                </div>
            </div>

            <div className="wide-text">
                Boka en kostnadsfri konsultation och få 50% på din första timme. (boka knapp) TESta 
            </div>

            <div className="wide-text">
                <ReadMoreReadLess />
            </div>
            
            <MiddleNav />   
        </div>

        
    )
    
};
export default About;