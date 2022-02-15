import React from "react";
import "./Post.css";
import avatar from "../../ProfileUser/Jocker.jpg";

function Post(props) {
  return (
    <div className="post">
      <div className="post-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <h2>{props.title}</h2>
      <span>Likes: {props.likes}</span>
      <p>;shfewhgwejh</p>
    </div>
  );
}

export default Post;
