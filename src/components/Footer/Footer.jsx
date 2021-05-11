import React from 'react';
import { SiGithub, SiGmail, SiCodepen } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import './FooterStyles.css'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="footerContainer">
            <Row>
                <Col></Col>
                <Col>
                    <h4 className='footer__title'>Social</h4>
                    <Row>
                        <a href="https://github.com/franciscoG98" target="_blank" rel="noopener noreferrer" >
                            <SiGithub size={60} className='icon' />
                            <span className='footer__link'>GitHub</span> 
                        </a>
                    </Row>
                    <Row>
                        <a href="https://codepen.io/franciscog98" target="_blank" rel="noopener noreferrer" >
                            <SiCodepen size={60} className='icon' /><span className='footer__link'>CodePen</span>                   
                        </a>
                    </Row>
                </Col>
                <Col></Col>
                <Col>
                    <h4 className='footer__title'>Contact Me</h4>
                    <Row>
                        <a href="https://www.linkedin.com/in/francisco-gonzalez-72aa5a158/" target="_blank" rel="noopener noreferrer" >
                            <GrLinkedinOption size={60} className='icon' /><span className='footer__link'>Linkedin</span>
                        </a>    
                    </Row>
                    <Row>
                        <a href="mailto:franciscomanuel.gonzalez3@gmail.com" >
                            <SiGmail size={60} className='icon' /><span className='footer__link'>Gmail</span>
                        </a>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} Francisco Gonzalez - All Rights Reserved
                </p>
            </div>
        </div>
    )
}
