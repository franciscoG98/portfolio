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

    const fondo = props.theme ? 'd' : 'n';

    const nav = fondo + ' nav';

    return (
        <div>
            <Theme theme={props.theme} setTheme={props.setTheme} />
            <nav className={nav}>
                <Link to="/"><AiOutlineHome/>Home</Link>
                <Link to="/about/"><AiOutlineBook />About</Link>
                <Link to="/work/"><AiOutlineLaptop />Work</Link>
                <Link to="/skills/"><AiOutlineCode />Skills</Link>
                <Link to="/contact/"><AiOutlineMail />Contact</Link>
            </nav>
        </div>

    )
}

export default Nabvar;
