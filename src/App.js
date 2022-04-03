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
    </div>
  );
}

export default App;
