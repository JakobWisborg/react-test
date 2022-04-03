import React from "react";
import { useState  } from "react";
import './ReadMoreReadLess.css';

const ReadMoreReadLess = () => {

    const [show, setShow] = useState(false);
 

    return (
        <div>
            <b>Utbildning:</b> 
            {show && 
            <p>
                Utbildad Hälsopedagog med fördjupade studier inom hälsosamt idrottande <br/>

                Licensierad Personlig tränare <br/>

                Diplomerad hälsocoach <br/>

                Idrottspsykologisk rådgivare <br/>

                Fasciabehandling <br/>

                Gravid och Mamma-tränare<br/>

                Mobility Trainer <br/>

                Fystränare
            </p>}
            <a onClick={() => setShow(!show)}>
                {show === true ? 'Visa mindre' : 'Visa mer'}
            </a>
            
        </div>
    )
    
};
export default ReadMoreReadLess;