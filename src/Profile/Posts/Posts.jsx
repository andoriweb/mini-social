import React from "react";
import Post from "./Post/Post";
import "./Posts.css";

let postData = [
  { id: 1, title: "Hi", likes: "20" },
  { id: 2, title: "Hello", likes: "13" },
  { id: 2, title: "How are you", likes: "24" },
];

let postItem = postData.map((post) => {
  return <Post title={post.title} likes={post.likes} />;
});

function Posts() {
  return <div>{postItem}</div>;
}

export default Posts;
