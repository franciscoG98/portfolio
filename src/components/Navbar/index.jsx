import React from 'react';
import "./navbar.css";
import Theme from './Theme';
import {
    AiOutlineHome,
    AiOutlineBook,
    AiOutlineCode,
    AiOutlineMail,
    AiOutlineLaptop
} from "react-icons/ai";
import {Link} from 'react-router-dom';

function Nabvar(props) {

    console.log('theme en navbar', props.theme);

    return (
        <div>
            <Theme theme={props.theme} setTheme={props.setTheme} />
            <div >
                <nav id='nav' className={props.theme} >
                    <Link className='link' to="/"><AiOutlineHome/>Home</Link>
                    <Link className='link' to="/about/"><AiOutlineBook />About</Link>
                    <Link className='link' to="/work/"><AiOutlineLaptop />Work</Link>
                    <Link className='link' to="/skills/"><AiOutlineCode />Skills</Link>
                    <Link className='link' to="/contact/"><AiOutlineMail />Contact</Link>
                </nav>
            </div>
        </div>

    )
}

export default Nabvar;
