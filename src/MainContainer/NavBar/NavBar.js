import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="main-nav">
      <ul className="links">
        <NavLink
          className="nav-item"
          activeClassName="active-nav-item"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="active-nav-item"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="active-nav-item"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="active-nav-item"
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
