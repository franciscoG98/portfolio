import React from 'react';
import './contactStyles.css';
import { SiGithub, SiGmail  } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { ImDownload } from "react-icons/im";

function Contact(props) {

    // console.log('theme en contact', props.theme);

    return (
        // <div className={props.theme}>

        <div className="contactBox">
            <div className='social-media'>
                <a href="https://github.com/franciscoG98" target="_blank" rel="noopener noreferrer" >
                    <SiGithub size={60} className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/francisco-gonzalez-72aa5a158/" target="_blank" rel="noopener noreferrer" >
                    <GrLinkedinOption size={60} className='icon' />
                </a>
                <a href="mailto:franciscomanuel.gonzalez3@gmail.com" >
                    <SiGmail size={60} className='icon' />
                </a>
                <a href="./cv/FranciscoG-en.pdf" download>
                    <ImDownload size={60} className='icon' />                      
                </a>
            </div>
        </div>

        // </div>
    )
}

export default Contact;