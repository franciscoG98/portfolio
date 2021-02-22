import React, { useState, useEffect } from 'react';
import "./navbar.css";
import Theme from './Theme';

function Nabvar(props) {

    const fondo = props.theme ? 'day' : 'night';

    return (
        <div>

            <Theme theme={props.theme} setTheme={props.setTheme} />
            <nav className='container'>
                <a className={fondo} href="/">Home</a>
                <a className={fondo} href="/about/">About</a>
                <a className={fondo} href="/work/">Work</a>
                <a className={fondo} href="/skills/">Skills</a>
                <a className={fondo} href="/contact/">Contact</a>
            </nav>
        </div>

    )
}

export default Nabvar

