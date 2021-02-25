import React from 'react';
import './AboutStyles.css';
import henry from '../../img/HenryCertificate.png';
import FCC from '../../img/JS-FCC.png';

function About(props) {

    const fondo = props.theme ? 'dia' : 'noche';

    const cont = fondo + ' container';

    return (
        <div className={cont}>
            <span className='top'>
                I'm a Full Stack Developer front-end oriented from Argentina.
                <br />
                I love learning and create things on the web.
            </span>

            <div className='content'>
                <div className='education'>
                    <h2>Education</h2>
                    <ul>
                        <li>Henry</li>
                        <br />
                        <img src={henry} alt="Henry Certificate"/>
                        <li>FreeCodeCamp</li>
                        <br />
                        <img src={FCC} alt="FreeCodeCamp Certificate"/>
                        <li>UBA</li>
                        <span>Actuary</span>
                        <li>Cambridge</li>
                        <span>First Certificate in English: FCE (B1)</span>
                    </ul>
                </div>
                <div className='hobbies'>
                    <h2>Hobbies</h2>
                    <ul>
                        <li>Trekking</li>
                        <li>Esqui</li>
                        <li>Pelota paleta</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;