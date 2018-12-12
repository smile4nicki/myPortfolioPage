import React, { Component } from "react";
import PageHeader from "./components/PageHeader.js";
import logo from "./Forest.jpg";

class Home extends Component {
  state = {
    examples: []
  };

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Nichola Ward Portfolio">
          This is the homepage for <strong>Nichola Ward's </strong>Portfolio
          <br />
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Welcome to my profile page detailing my coding experience so far
              {"\n"}
              on this page you will find a link to my Github which shows all my
              projects so far,{"\n"}
              links to my social media pages and blog detailing my studies so
              far. Further information to come!
            </p>
            <br />
          </header>
        </PageHeader>
      </div>
    );
  }
}
export default Home;
