import React from "react";
import { useState  } from "react";
import './ReadMoreReadLess.css';
import expandLess from '../../symbols/expand-less.svg';
import expandMore from '../../symbols/expand-more.svg';

const ReadMoreReadLess = () => {

    const [show, setShow] = useState(false);
 

    return (
        <div className="readMore">
            <b>Utbildning:</b> 
           
            <a onClick={() => setShow(!show)}>
                {/* <img src={expandMore}></img>
                {show === true ? 'Visa mindre' : 'visa mer'} */}
                
                {show === true ? <img src={expandLess}></img> : <img src={expandMore}></img>}
            </a>
            {show && 
            <p>
                Utbildad Hälsopedagog med fördjupade studier inom hälsosamt idrottande <br/><br/>

                Licensierad Personlig tränare <br/><br/>

                Diplomerad hälsocoach <br/><br/>

                Idrottspsykologisk rådgivare <br/><br/>

                Fasciabehandling <br/><br/>

                Gravid och Mamma-tränare<br/><br/>

                Mobility Trainer <br/><br/>

                Fystränare
            </p>}
            
        </div>
    )
    
};
export default ReadMoreReadLess;