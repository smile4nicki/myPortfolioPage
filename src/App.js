import React, { Component } from "react";
import Layout from "./app/Layout.js";
import * as contentful from "contentful";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
