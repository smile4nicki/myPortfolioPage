import React, { Component } from "react";
import * as contentful from "contentful";
import PageHeader from "./components/PageHeader.js";

class Home extends Component {
  state = {
    examples: []
  };

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Nichola Ward Portfolio">
          This is the homepage for <strong>Nichola Ward's </strong>Portfolio
        </PageHeader>
        {/* <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))} */}
      </div>
    );
  }
}
export default Home;
