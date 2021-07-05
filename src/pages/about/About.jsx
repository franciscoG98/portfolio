import React from 'react';
import './AboutStyles.css';
import henry from '../../assets/img/HenryCertificate.png';
import FCCJS from '../../assets/img/JS-FCC.png';
import FCCWD from '../../assets/img/WD-FCC.png';
// import UBA from '../../assets/img/uba.png';
import CAMBRIDGE from '../../assets/img/cambridgeU.png';

import Card from '../../components/Card'


function About(props) {

    console.log('theme en about', props.theme);


    return (
        <>
            <h2>Education</h2>
            <div className='education'>

                <Card
                    img={henry}
                    imgAlt={"Henry certificate"}
                    title={'Henry'}
                    titleLink={'https://www.soyhenry.com/'}
                    text={'Full Stack web developer - 700hs'}
                />
                <Card
                    img={FCCWD}
                    imgAlt={"FreeCodeCamp certificate"}
                    title={'FreeCodeCamp'}
                    titleLink={'https://www.freecodecamp.org/'}
                    text={'Responsive Web Design Certificate - 300hs'}
                />
                <Card
                    img={CAMBRIDGE}
                    imgAlt={"cambridge university logo"}
                    title={'University of Cambridge'}
                    titleLink={'https://www.cambridgeenglish.org/exams-and-tests/first/'}
                    text={'First Certificate in English (B2)'}
                />
                <Card
                    img={FCCJS}
                    imgAlt={"FreeCodeCamp certificate"}
                    title={'FreeCodeCamp'}
                    titleLink={'https://www.freecodecamp.org/'}
                    text={'Javascript Algorithms and Data Structure Certificate - 300hs'}
                />
                {/* <Card
                    img={UBA}
                    imgAlt={"Uba logo"}
                    title={'Universidad de Buenos Aires'}
                    text={'Actuario en Economía'}
                /> */}

            </div>
        </>

    )
}

export default About;