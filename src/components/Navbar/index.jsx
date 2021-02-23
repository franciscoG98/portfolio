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

    const fondo = props.theme ? 'day' : 'night';

    return (
        <div>
            <Theme theme={props.theme} setTheme={props.setTheme} />
            <nav className='container'>
                <Link className={fondo} to="/portfolio/"><AiOutlineHome/>Home</Link>
                <Link className={fondo} to="/portfolio/about/"><AiOutlineBook />About</Link>
                <Link className={fondo} to="/portfolio/work/"><AiOutlineLaptop />Work</Link>
                <Link className={fondo} to="/portfolio/skills/"><AiOutlineCode />Skills</Link>
                <Link className={fondo} to="/portfolio/contact/"><AiOutlineMail />Contact</Link>
            </nav>

        </div>

    )
}

export default Nabvar;
