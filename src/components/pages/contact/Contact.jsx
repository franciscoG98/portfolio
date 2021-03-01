import React from 'react';
import './contactStyles.css';
import { SiGithub, SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { ImDownload } from "react-icons/im";




function Contact(props) {

    console.log('theme en contact', props.theme);

    return (
        <div className={props.theme}>
            <h1>Get in touch with me!</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Message:
                    <input type="text" name="message" />
                </label>
                <br/>
                <input type="submit" value="send" />
            </form>
            <div className='social-media'>
                <SiGithub size={60} />
                <GrLinkedin size={60} />
                <SiGmail size={60} />
                <ImDownload size={60} />
            </div>
        </div>
    )
}

export default Contact;