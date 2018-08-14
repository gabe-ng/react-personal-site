import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  componentDidMount = () => {
    const w = window;
    let intro = document.getElementById("intro");
    let link = document.getElementById("title-link");
    let pos = 210;

    w.onscroll = () => {
      if (window.pageYOffset > pos) {

        intro.classList.remove("fadeinDown");
        link.classList.remove("fadeoutDown");
        link.classList.remove("hidden");
        intro.classList.add("fadeoutUp");
        link.classList.add("fadeinUp");
        setTimeout(() => {
          intro.classList.add("hidden");
        }, 200);
      } else if (window.pageYOffset < pos) {

        intro.classList.add("fadeinDown");
        intro.classList.remove("hidden");
        intro.classList.remove("fadeoutUp");
        link.classList.add("fadeoutDown");
        link.classList.remove("fadeinUp");
        setTimeout(() => {
          link.classList.add("hidden");
        }, 200);
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
            -
            <span> software engineer</span>
            <span> dog lover</span>
            <span> fullstack developer</span>
            <span> board game enthusiast</span>
            <span> ambitious learner</span>
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
