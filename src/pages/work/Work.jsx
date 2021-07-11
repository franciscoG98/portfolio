import React from 'react';
import './workStyles.css';
import { Col, Row } from 'react-bootstrap'
import Proyect from '../../components/Proyect'


const Work = () => {

    const BBCimg = 'https://raw.githubusercontent.com/franciscoG98/BreakingBadApp2/main/src/img/home.png';
    const BBClink = 'https://franciscog98.github.io/BreakingBadApp2/';
    const BBCrepo = 'https://github.com/franciscoG98/BreakingBadApp2';

    const MoviesImg = 'https://raw.githubusercontent.com/franciscoG98/movies-app/main/media/homeScreen.png';
    const MoviesLink = 'https://movies-app-fg.vercel.app/';
    const MoviesRepo = 'https://github.com/franciscoG98/movies-app';

    const PortfolioImg = 'https://raw.githubusercontent.com/franciscoG98/portfolio/master/public/img/homePic.png';
    const PortfolioLink = 'https://franciscog98.github.io/portfolio/';
    const PortfolioRepo = 'https://github.com/franciscoG98/portfolio';

    return (
        
        <div className='workContainer'>

            <Row className='cardRow'>

                <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Personal Portfolio'}
                        image={PortfolioImg}
                        imgAlt={'portfolio site preview'}
                        repo={PortfolioRepo}
                        siteLink={PortfolioLink}
                        description={'This site, where I show my skills, proyects and contact information. Stack: react, css, react, react-bootstrap, github pages'}
                    />
                </Col>

                <Col xs={10} sm={8} md={5} lg={5}>
                    <Proyect
                        title={'Movies App'}
                        image={MoviesImg}
                        imgAlt={'movies app site preview'}
                        repo={MoviesRepo}
                        siteLink={MoviesLink}
                        description={'Static web page where you cand find you favorite movies and series. Stack: react, css, OMDB Api, vercel'}
                    />
                </Col>

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

            </Row>

            
          
        </div>
    )
}

export default Work;