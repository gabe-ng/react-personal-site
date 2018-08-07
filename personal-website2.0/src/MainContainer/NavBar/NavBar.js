import React from "react";
import "./NavBar.css";

const navbar = () => {
  return <div className="main-nav">
      <ul className="links">
        <li class="active-li">
          <a id="about" className="active-a" href="#placeholder">
            About
          </a>
        </li>
        <li class="">
          <a id="projects" className="" href="#placeholder">
            Projects
          </a>
        </li>
      <li class="">
          <a id="skills" className="" href="#placeholder">
            Skills
          </a>
        </li>
      <li class="">
          <a id="contact" className="" href="#placeholder">
            Contact
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>;
};

export default navbar;
