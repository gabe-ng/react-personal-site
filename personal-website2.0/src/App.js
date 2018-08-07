import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div id="background" className="background" />
        <header id="top">
          <div class="heading-wrap">
            <h1>
              hi, i'm
              <span class="orange">Gabriel Ng</span>
            </h1>
            <h1>i'm a fullstack web developer</h1>
          </div>
        </header>
        {/*<MainContainer />
    <Footer />*/}
      </div>
    );
  }
}

export default App;
