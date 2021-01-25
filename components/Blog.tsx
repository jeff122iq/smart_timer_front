// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================
import React from "react";
import useStyles from "../styles/blog";
import { Container } from "@material-ui/core";
import Post from "./Post";
import BlogSubscription from "./BlogSubscription";
// ========================== IMPORT_COMPONENTS_AND_LIBRARIES ====================================

// ========================== COMPONENT ====================================
const Blog = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.rootBlog}>
        <h1>Blog page</h1>
        <Post />
        <Post />
        <Post />
        <BlogSubscription />
      </Container>
    </div>
  );
};

export default Blog;
// ========================== COMPONENT ====================================
