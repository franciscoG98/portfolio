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
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Nabvar(props) {

    // console.log('theme en navbar', props.theme);

    return (
        <Container>
            <Theme theme={props.theme} setTheme={props.setTheme} />
            <div >
                <nav id='nav' className={props.theme} >
                    <NavLink activeClassName= 'active' className='link' exact to="/"><AiOutlineHome/>Home</NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/about/"><AiOutlineBook />About</NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/work/"><AiOutlineLaptop />Work</NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/skills/"><AiOutlineCode />Skills</NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/contact/"><AiOutlineMail />Contact</NavLink>
                </nav>
            </div>
        </Container>

    )
}

export default Nabvar;
