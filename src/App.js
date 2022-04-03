import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import MiddleNav from "../src/components/Middle-nav-services/MiddleNav";

function App() {


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

      <section className="App-content">
        
        <h2>Boka en kostnadsfri konsultation</h2>
        <p>
        Under en konsultation gör vi en behovsanalys och sätter mål. Därefter ger dig ett förslag ett upplägg på hur jag kan hjälpa dig. 
        Konsultationen är kostnadsfri och du binder inte upp dig till något. Boka en tid via länken och välj om du vill ses fysiskt eller digitalt:
        </p>
      </section>
    </div>
  );
}

export default App;
