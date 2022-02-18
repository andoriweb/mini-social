import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

function Posts(props) {
  let postItem = props.postData.map((post) => {
    return <Post title={post.title} likes={post.likes} />;
  });

  return <div>{postItem}</div>;
}

export default Posts;
