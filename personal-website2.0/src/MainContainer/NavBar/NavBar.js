import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const Navbar = () => {
  return <div className="main-nav">
      <ul className="links">
        <NavLink className="nav-item" activeClassName="active-nav-item" to="/about">
            About
        </NavLink>
        <NavLink className="nav-item" activeClassName="active-nav-item" to="/projects">
            Projects
        </NavLink>
        <NavLink className="nav-item" activeClassName="active-nav-item" to="/skills">
            Skills
        </NavLink>
        <NavLink className="nav-item" activeClassName="active-nav-item" to="/contact">
            Contact
        </NavLink>
      </ul>
      <ul className="icons">
        <li>
          <a href="http://www.github.com/gabe-ng" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/gabriel-n" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="http://www.facebook.com/gabengatcal" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href="mailto:gabe.f.ng@gmail.com?Subject=Hello!">
            <i className="far fa-envelope" />
          </a>
        </li>
      </ul>
    </div>;
};

export default Navbar;
