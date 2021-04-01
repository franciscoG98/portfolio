import React from 'react';
import './AboutStyles.css';
import henry from '../../img/HenryCertificate.png';
import FCC from '../../img/JS-FCC.png';

function About(props) {

    console.log('theme en about', props.theme);


    // const fondo = props.theme ? 'dia' : 'noche';
    // const cont = fondo + ' container';

    return (
        'hola'
        // <div className={cont}>
        // <div className='education'>
        //     <h2>Education</h2>

        //     <div className="content0">

        //         <div className="content1">
        //             <div>
        //                 <div className="box">
        //                     <h3>Henry</h3>
        //                     <a href="https://www.soyhenry.com/" target="_blank" rel="noopener noreferrer">
        //                         <img src={henry} alt="Henry Certificate"/>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="box">
        //                     <h3>UBA (Universidad de Buenos Aires)</h3>
        //                     <a href="http://www.uba.ar/download/academicos/carreras/actuario.pdf" target="_blank" rel="noopener noreferrer">
        //                         <span>Actuary, Economy oriented</span>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="content2">

        //             <div>
        //                 <div className="box">
        //                     <h3>FreeCodeCamp</h3>
        //                     <a href="https://www.freecodecamp.org/certification/port3r/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">
        //                         <img src={FCC} alt="FreeCodeCamp Certificate"/>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="box">
        //                     <h3>Cambridge University</h3>
        //                     <a href="https://www.cambridgeenglish.org/exams-and-tests/first/" target="_blank" rel="noopener noreferrer">
        //                         <span>First Certificate in English: FCE (B1)</span>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //         {/* </div> */}
        // </div>
    )
}

export default About;