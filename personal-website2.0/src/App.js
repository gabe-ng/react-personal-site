import React, { Component } from "react";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";

class App extends Component {
  render() {
    return <div>
        <div id="background" className="background" />
        <header id="top">
          <div className="heading-wrap">
            <h1 className="main-title">
              hi, i'm
              <span> Gabriel Ng</span>
            </h1>
            <h1 className="main-title">i'm a fullstack web developer</h1>
          </div>
        </header>
        <MainContainer />
      </div>;
  }
}

export default App;
