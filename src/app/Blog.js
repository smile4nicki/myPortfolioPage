import React, { Component } from "react";
import * as contentful from "contentful";
import BlogItem from "../app/blog/BlogItem.js";
import PageHeader from "./components/PageHeader.js";

class Blog extends Component {
  state = {
    posts: []
  };

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          The very beginning of a <strong>JavaScript</strong> programming blog,
          showing what I have been learning on my training at{" "}
          <strong>Northcoders</strong>
          <strong>QA consulting.</strong>
          and beyond
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }

  client = contentful.createClient({
    space: "tq6vk5nwvy1m",
    accessToken:
      "52a2737f822747fabe3afb3f5aaaace0b438b68ee4a8f05a60b8e68945fec31c"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = (response) => {
    this.setState({
      posts: response.items
    });
  };
}

export default Blog;
