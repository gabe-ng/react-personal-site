import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./MainContainer.css";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
