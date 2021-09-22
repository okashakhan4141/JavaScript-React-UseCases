import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";

// class component
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to React </h1>
      </header>
    );
  }
}

// fucntion component
const Body = () => (
  <React.Fragment>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </React.Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />;
        <Body />;
        <Profile />
      </div>
    );
  }
}

export default App;
