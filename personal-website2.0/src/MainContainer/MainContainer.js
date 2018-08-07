import React, { Component } from "react";
import "./MainContainer.css";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe"
import Footer from "./Footer/Footer";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default MainContainer;