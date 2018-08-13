import React, { Component } from "react";

import "./App.css";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";

class App extends Component {
  render() {
    return <div>
        <div id="background" className="background" />
        <Header />
        <MainContainer />
      </div>;
  }
}

export default App;
