import React, { useState, useEffect } from 'react';
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
                <a className={fondo} href="/"><AiOutlineHome/>Home</a>
                <a className={fondo} href="/about/"><AiOutlineBook />About</a>
                <a className={fondo} href="/work/"><AiOutlineLaptop />Work</a>
                <a className={fondo} href="/skills/"><AiOutlineCode />Skills</a>
                <a className={fondo} href="/contact/"><AiOutlineMail />Contact</a>
            </nav>

        </div>

    )
}

export default Nabvar;
