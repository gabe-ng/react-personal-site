import React, { Component } from "react";
import "./MainContainer.css";
import NavBar from "./NavBar/NavBar";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
      </div>
    );
  }
}

export default MainContainer;