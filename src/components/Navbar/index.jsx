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

function Nabvar(props) {

    const fondo = props.theme ? 'day' : 'night';

    return (
        <div>
            <Theme theme={props.theme} setTheme={props.setTheme} />
            <nav className='container'>
                <a className={fondo} href="/portfolio/"><AiOutlineHome/>Home</a>
                <a className={fondo} href="/portfolio/about/"><AiOutlineBook />About</a>
                <a className={fondo} href="/portfolio/work/"><AiOutlineLaptop />Work</a>
                <a className={fondo} href="/portfolio/skills/"><AiOutlineCode />Skills</a>
                <a className={fondo} href="/portfolio/contact/"><AiOutlineMail />Contact</a>
            </nav>

        </div>

    )
}

export default Nabvar;
