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
        <li>
          <a href="http://www.github.com/gabe-ng" target="_blank">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/gabriel-n" target="_blank">
            <i class="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
        <a href="http://www.facebook.com/gabengatcal" target="_blank">
            <i class="fab fa-facebook-f" />
          </a>
        </li>
      </ul>
    </div>;
};

export default navbar;
