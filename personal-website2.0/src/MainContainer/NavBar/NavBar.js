import React from "react";
import "./NavBar.css";

const navbar = () => {
  return (
    <div className="main-nav">
      <ul className="links">
        <li>
          <a id="about" className="nav" href="#placeholder">
            About
          </a>
        </li>
        <li>
          <a id="projects" className="nav" href="#placeholder">
            Projects
          </a>
        </li>
        <li>
          <a id="skills" className="nav" href="#placeholder">
            Skills
          </a>
        </li>
        <li>
          <a id="contact" className="nav" href="#placeholder">
            Contact
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default navbar;
