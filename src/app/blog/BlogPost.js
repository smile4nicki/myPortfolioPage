import React from "react";
// import { Link } from "react-router-dom";
import PageContent from "./../components/PageContent";
import BlogNav from "./shared/BlogNav";
import BlogContent from "./shared/BlogContent";
import BlogItem from "./BlogItem";

const BlogPost = ({
  location: {
    state: { props }
  }
}) => (
  <PageContent>
    <BlogNav date={props.date} status={props.status} to="/blog" />
    <BlogContent {...props} />
  </PageContent>
);

export default BlogPost;
