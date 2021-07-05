// import React from 'react';
import './workStyles.css';
import catGif from './giphy.gif'
import { Col, Row } from 'react-bootstrap'

function Work() {
    return (
        
        <div className='workContainer'>
            <Col>
                <Row>
                    <h3>This section is under construction</h3>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <img className='construction' src={catGif} alt="crazy cat coding"/>
                    </Col>
                    <Col></Col>
                </Row>
            </Col>

            
            {/* <div className="boxx">
                <h4>work title</h4>
                <img src="#" alt="imagen"/>
                <div className="moreInfo">
                    <span>repo</span>
                    <br/>
                    <span>deployed</span>
                </div>
            </div>
            <div className="boxx">
                <h4>work title</h4>
                <img src="#" alt="imagen"/>
                <div className="moreInfo">
                    <span>repo</span>
                    <br/>
                    <span>deployed</span>
                </div>
            </div>
            <div className="boxx">
                <h4>work title</h4>
                <img src="#" alt="imagen"/>
                <div className="moreInfo">
                    <span>repo</span>
                    <br/>
                    <span>deployed</span>
                </div>
            </div>
            <div className="boxx">
                <h4>work title</h4>
                <img src="#" alt="imagen"/>
                <div className="moreInfo">
                    <span>repo</span>
                    <br/>
                    <span>deployed</span>
                </div>
            </div> */}
        </div>
    )
}

export default Work;