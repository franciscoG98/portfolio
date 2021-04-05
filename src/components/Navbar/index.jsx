import React from 'react';
import "./navbar.css";
import Theme from './Theme';
import {
    AiOutlineHome,
    AiOutlineBook,
    AiOutlineCode,
    AiOutlineMail,
    // AiOutlineLaptop
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
                    <NavLink activeClassName= 'active' className='link' exact to="/"><AiOutlineHome/><span>Home</span></NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/about/"><AiOutlineBook /><span>About</span></NavLink>
                    {/* <NavLink activeClassName= 'active' className='link' to="/work/"><AiOutlineLaptop /><span>Work</span></NavLink> */}
                    <NavLink activeClassName= 'active' className='link' to="/skills/"><AiOutlineCode /><span>Skills</span></NavLink>
                    <NavLink activeClassName= 'active' className='link' to="/contact/"><AiOutlineMail /><span>Contact</span></NavLink>
                </nav>
            </div>
        </Container>

    )
}

export default Nabvar;
