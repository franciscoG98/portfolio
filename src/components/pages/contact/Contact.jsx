import React from 'react';
import './contactStyles.css';
import { SiGithub, SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { ImDownload } from "react-icons/im";

function Contact(props) {

    // console.log('theme en contact', props.theme);

    return (
        // <div className={props.theme}>

        <div className="contactBox">
            {/* form */}
            <form>
                <label>
                    Name:
                    <br/>
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Email:
                    <br/>
                    <input type="text" name="email" />
                </label>
                <br/>
                <label>
                    Message:
                    <br/>
                    <input type="text" name="message" />
                </label>
                <br/>
                <input type="submit" value="send" />
            </form>
            {/* icons */}
            <div className='social-media'>
                <button>
                    <SiGithub size={60} className='icon' />
                </button>
                <button>
                    <GrLinkedin size={60} className='icon' />
                </button>
                <button>
                    <SiGmail size={60} className='icon' />
                </button>
                <button>
                    <ImDownload size={60} className='icon' />
                </button>                                 
            </div>
        </div>

        // </div>
    )
}

export default Contact;