import React from "react";
import { useState  } from "react";
import './ReadMoreReadLess.css';
import expandLess from '../../symbols/expand-less.svg';
import expandMore from '../../symbols/expand-more.svg';

const ReadMoreReadLess = () => {

    const [show, setShow] = useState(false);
 

    return (
        <div>
            <b>Utbildning:</b> 
           
            <a onClick={() => setShow(!show)}>
                {/* <img src={expandMore}></img>
                {show === true ? 'Visa mindre' : 'visa mer'} */}
                
                {show === true ? <img src={expandLess}></img> : <img src={expandMore}></img>}
            </a>
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
            
        </div>
    )
    
};
export default ReadMoreReadLess;