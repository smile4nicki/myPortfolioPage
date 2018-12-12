import React from "react";
import BlogContent from "./shared/BlogContent";
import BlogNav from "./shared/BlogNav";

const BlogItem = (props) => (
  <div className="box">
    <BlogContent limit={150} {...props}>
      <BlogNav
        date={props.date}
        status={props.status}
        to={{
          pathname: `/blog/${props.path}`,
          state: { props }
        }}
      />
    </BlogContent>
  </div>
);

export default BlogItem;