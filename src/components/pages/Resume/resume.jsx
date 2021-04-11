import React from 'react';
// import CVes from './cv/screenCVes.png';
import CVen from './cv/screenCVen.png';

import './resumeStyles.css';

function Resume() {


    return (
      <div className="cvViewer">
        <img src={CVen} alt="curriculum screenshot" className="cvContainer"/>
      </div>
    ) 
}

export default Resume;
