import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  componentDidMount = () => {
    return;
    // write fade in/out
  };

  render() {
    return (
      <div className="header-wrap">
        <section id="intro" className="intro">
          <h1 className="main-title">
            Hi, I'm
            <span> Gabriel Ng</span>
          </h1>
          <h1 className="second-title slidingVertical">
            I'm a
            <span> fullstack web developer</span>
            <span> dog lover</span>
            <span> software engineer</span>
            <span> board game enthusiast</span>
            <span> quick learner</span>
          </h1>
        </section>
        <header id="title-link" className="">
          <Link className="title-link" to="/">
            Gabriel{" "}
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
