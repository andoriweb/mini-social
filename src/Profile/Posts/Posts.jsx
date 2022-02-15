import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

function Posts() {
  return (
    <div>
      <Post title="Hi" likes="20" />
      <Post title="Hello" likes="14" />
    </div>
  );
}

export default Posts;
