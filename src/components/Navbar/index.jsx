import React from "react";
import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineCode,
  AiOutlineLaptop,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Nabvar(props) {
  return (
    <nav id="nav" className={props.theme}>
      <NavLink activeClassName="active" className="link" exact to="/">
        <AiOutlineHome />
        Home
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/about/">
        <AiOutlineBook />
        About
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/work/">
        <AiOutlineLaptop />
        Work
      </NavLink>
      <NavLink activeClassName="active" className="link" to="/skills/">
        <AiOutlineCode />
        Skills
      </NavLink>
    </nav>
  );
}

export default Nabvar;
