import React, { Component } from "react";
import "./App.css";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div id="background" className="background" />
        <header id="top">
          <div className="heading-wrap">
            <h1>
              hi, i'm
              <span className="orange">Gabriel Ng</span>
            </h1>
            <h1>i'm a fullstack web developer</h1>
          </div>
        </header>
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
