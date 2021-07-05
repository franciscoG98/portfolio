import React from 'react';
import './workStyles.css';
import { Col, Row } from 'react-bootstrap'
import Proyect from '../../components/Proyect'


const Work = () => {

    const BBCimg = 'https://raw.githubusercontent.com/franciscoG98/BreakingBadApp2/main/src/img/home.png';
    const BBClink = 'https://franciscog98.github.io/BreakingBadApp2/';
    const BBCrepo = 'https://github.com/franciscoG98/BreakingBadApp2';

    const Moviesimg = 'https://raw.githubusercontent.com/franciscoG98/movies-app/main/media/homeScreen.png';
    const Movieslink = 'https://movies-app-fg.vercel.app/';
    const Moviesrepo = 'https://github.com/franciscoG98/movies-app';
    
    

    return (
        
        <div className='workContainer'>

            <Row className='cardRow'>
                <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Breaking Bad'}
                        image={BBCimg}
                        imgAlt={'breaking bad cast site preview'}
                        repo={BBCrepo}
                        siteLink={BBClink}
                        description={'Static web page where you cand find you favorite characters from Breaking Bad. Stack: react, css, gh-pages'}
                    />
                </Col>

                <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Movies App'}
                        image={Moviesimg}
                        imgAlt={'movies app site preview'}
                        repo={Moviesrepo}
                        siteLink={Movieslink}
                        description={'Static web page where you cand find you favorite movies and series. Stack: react, css, OMDB Api, vercel'}
                    />
                </Col>

                {/* <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Breaking Bad Cast'}
                        image={'https://github.com/franciscoG98/BreakingBadApp2/blob/main/src/img/home.png'}
                        imgAlt={'breaking bad cast site preview'}
                        repo={'https://github.com/franciscoG98/BreakingBadApp2'}
                        // siteLink={}
                        description={'static web page where you cand find you favorite characters from Breaking Bad'}
                    />
                </Col>

                <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Breaking Bad Cast'}
                        image={'https://github.com/franciscoG98/BreakingBadApp2/blob/main/src/img/home.png'}
                        imgAlt={'breaking bad cast site preview'}
                        repo={'https://github.com/franciscoG98/BreakingBadApp2'}
                        // siteLink={}
                        description={'static web page where you cand find you favorite characters from Breaking Bad'}
                    />
                </Col> */}
            </Row>

            
          
        </div>
    )
}

export default Work;