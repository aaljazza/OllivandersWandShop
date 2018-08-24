import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WandList from "./WandList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ollivander's Wand Store</h1>
        </header>
        <p className="App-intro" />
        <WandList />{" "}
      </div>
    );
  }
}

export default App;
