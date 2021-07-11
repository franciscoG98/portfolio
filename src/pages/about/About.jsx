import React from 'react';
import './AboutStyles.css';
import Card from '../../components/Card'
import  { Col, Row } from 'react-bootstrap'

import henry from '../../assets/img/HenryCertificate.png';
import FCCJS from '../../assets/img/JS-FCC.png';
import FCCWD from '../../assets/img/WD-FCC.png';
// import UBA from '../../assets/img/uba.png';
import CAMBRIDGE from '../../assets/img/cambridgeU.png';



function About(props) {

    console.log('theme en about', props.theme);


    return (
        <>
            <h2>Education</h2>
            <div className='education'>
                <Row>
                    <Col>
                        <Card
                            img={henry}
                            imgAlt={"Henry certificate"}
                            title={'Henry'}
                            titleLink={'https://www.soyhenry.com/'}
                            text={'Full Stack web developer - 700hs'}
                        />
                    </Col>

                    <Col>
                        <Card
                            img={FCCWD}
                            imgAlt={"FreeCodeCamp certificate"}
                            title={'FreeCodeCamp'}
                            titleLink={'https://www.freecodecamp.org/'}
                            text={'Responsive Web Design Certificate - 300hs'}
                        />
                    </Col>

                    <Col>
                        <Card
                            img={CAMBRIDGE}
                            imgAlt={"cambridge university logo"}
                            title={'University of Cambridge'}
                            titleLink={'https://www.cambridgeenglish.org/exams-and-tests/first/'}
                            text={'First Certificate in English (B2)'}
                        />
                    </Col>

                    <Col>
                        <Card
                            img={FCCJS}
                            imgAlt={"FreeCodeCamp certificate"}
                            title={'FreeCodeCamp'}
                            titleLink={'https://www.freecodecamp.org/'}
                            text={'Javascript Algorithms and Data Structure Certificate - 300hs'}
                        />
                    </Col>

                    {/* <Card
                        img={UBA}
                        imgAlt={"Uba logo"}
                        title={'Universidad de Buenos Aires'}
                        text={'Actuario en Economía'}
                    /> */}
                </Row>

            </div>
        </>

    )
}

export default About;