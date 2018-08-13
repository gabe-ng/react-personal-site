import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  componentDidMount = () => {
    const w = window;
    let intro = document.getElementById("intro");
    let link = document.getElementById("title-link");
    let pos = 250;

    w.onscroll = () => {
      if (window.pageYOffset > pos) {
        intro.classList.add("hidden");
        intro.classList.remove("fadeinDown");

        link.classList.remove("hidden");
        link.classList.add("fadeinUp");
      } else if (window.pageYOffset < pos) {
        intro.classList.remove("hidden");
        intro.classList.add("fadeinDown");

        link.classList.add("hidden");
        link.classList.remove("fadeinUp");
      }
    };
  };

  render() {
    return (
      <div className="header-wrap">
        <section id="intro" className="intro fadeinDown">
          <h1 className="main-title">
            Hi, I'm
            <span> Gabriel Ng</span>
          </h1>
          <h1 className="second-title slidingVertical">
            I'm a<span> fullstack web developer</span>
            <span> dog lover</span>
            <span> software engineer</span>
            <span> board game enthusiast</span>
            <span> quick learner</span>
          </h1>
        </section>
        <header id="title-link" className="hidden">
          <Link className="title-link" to="/">
            Gabriel{" "}
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
