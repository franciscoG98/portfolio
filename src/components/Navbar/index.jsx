import React from 'react';
import "./navbar.css";
// import Theme from './Theme';
import {
    AiOutlineHome,
    AiOutlineBook,
    AiOutlineCode
} from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Nabvar(props) {

    // console.log('theme en navbar', props.theme);

    return (
        <Container>
            {/* <Theme theme={props.theme} setTheme={props.setTheme} /> */}
            <nav id='nav' className={props.theme} >
                <NavLink activeClassName= 'active' className='link' exact to="/"><AiOutlineHome/><span>Home</span></NavLink>
                <NavLink activeClassName= 'active' className='link' to="/about/"><AiOutlineBook /><span>About</span></NavLink>
                {/* <NavLink activeClassName= 'active' className='link' to="/work/"><AiOutlineLaptop /><span>Work</span></NavLink> */}
                <NavLink activeClassName= 'active' className='link' to="/skills/"><AiOutlineCode /><span>Skills</span></NavLink>
                <NavLink activeClassName= 'active' className='link' to="/resume/"><RiNewspaperLine /><span>Resume</span></NavLink>
            </nav>
        </Container>

    )
}

export default Nabvar;
