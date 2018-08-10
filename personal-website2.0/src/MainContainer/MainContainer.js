import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./MainContainer.css";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
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
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={AboutMe} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default MainContainer;
