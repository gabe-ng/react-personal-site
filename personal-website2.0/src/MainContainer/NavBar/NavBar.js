import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const navbar = () => {
  return <div className="main-nav">
      <ul className="links">
        <li className="active-li">
          <Link className="nav-item active-nav-item" to="/">
            About
          </Link>
        </li>
        <li className="">
          <Link className="nav-item" to="/projects">
            Projects
          </Link>
        </li>
        <li className="">
          <Link className="nav-item" to="/skills">
            Skills
          </Link>
        </li>
        <li className="">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
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
      </ul>
    </div>;
};

export default navbar;
