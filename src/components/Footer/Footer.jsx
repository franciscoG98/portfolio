import React from 'react';
import { SiGithub, SiGmail, SiCodepen } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import './FooterStyles.css'

export default function Footer() {
    return (
        <div className="main-footer">
            <div className="footerContainer">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-6 col-sm-6">
                        <h4>Social</h4>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://github.com/franciscoG98" target="_blank" rel="noopener noreferrer" >
                                    <SiGithub size={60} className='icon' /> <span>GitHub</span> 
                                </a>
                            </li>
                            <li>
                                <a href="https://codepen.io/franciscog98" target="_blank" rel="noopener noreferrer" >
                                    <SiCodepen size={60} className='icon' /><span>CodePen</span>                   
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col-md-6 col-sm-6">
                        <h4>Contact Me</h4>
                        <ul className='list-unstyled'>
                            <li>
                                <a href="https://www.linkedin.com/in/francisco-gonzalez-72aa5a158/" target="_blank" rel="noopener noreferrer" >
                                    <GrLinkedinOption size={60} className='icon' /><span>Linkedin</span>
                                </a>    
                            </li>
                            <li>
                                <a href="mailto:franciscomanuel.gonzalez3@gmail.com" >
                                    <SiGmail size={60} className='icon' /><span>Gmail</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    {/* <div className="col-md-4 col-sm-6">
                        <h4>Lorem, ipsum.</h4>
                        <ul className='list-unstyled'>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ul>
                    </div> */}
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Francisco Gonzalez - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}
