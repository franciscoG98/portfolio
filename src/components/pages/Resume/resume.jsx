import React from 'react';
// import CVes from './cv/screenCVes.png';
import CVen from './cv/screenCVen.png';

import './resumeStyles.css';

function Resume() {


    return (
        <div className="cvViewer">
            {/* <div className="chooseLang">
                <span>Resume</span>
                <input type="checkbox" className='checkboxLang'/>
                <span className="aver">HOLAAAAAAAAAA</span>
            </div> */}
             {/* {document.getElementsByClassName('checkboxLang') ? console.log(true) : console.log(false)} */}
            <img src={CVen} alt="curriculum screenshot" className="cvContainer"/>
        </div>
    ) 
}

export default Resume;
