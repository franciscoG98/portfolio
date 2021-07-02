import React from 'react';
import './AboutStyles.css';
import henry from '../../assets/img/HenryCertificate.png';
import FCCJS from '../../assets/img/JS-FCC.png';
import FCCWD from '../../assets/img/WD-FCC.png';
import UBA from '../../assets/img/uba.png';
import CAMBRIDGE from '../../assets/img/cambridgeU.png';

import Card from '../../components/Card'


function About(props) {

    console.log('theme en about', props.theme);


    // const fondo = props.theme ? 'dia' : 'noche';
    // const cont = fondo + ' container';

    return (
        <>
            <h2>Education</h2>
            <div className='education'>

                <Card
                    img={henry}
                    imgAlt={"Henry certificate"}
                    title={'Henry'}
                    text={'Full Stack web developer'}
                />
                <Card
                    img={FCCWD}
                    imgAlt={"FreeCodeCamp certificate"}
                    title={'FreeCodeCamp'}
                    text={'Responsive Web Design Certificate'}
                />
                <Card
                    img={CAMBRIDGE}
                    imgAlt={"cambridge university logo"}
                    title={'University of Cambridge'}
                    text={'First Certificate in English'}
                />
                <Card
                    img={FCCJS}
                    imgAlt={"FreeCodeCamp certificate"}
                    title={'FreeCodeCamp'}
                    text={'Javascript Algorithms and Data Structure Certificate'}
                />

            </div>
        </>

    )
}

export default About;