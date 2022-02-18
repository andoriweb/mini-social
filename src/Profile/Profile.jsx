import React from "react";
import Posts from "./Posts/Posts";
import "./Profile.css";
import CreatePost from "./CreatePost/CreatePost";
import ProfileUser from "./ProfileUser/ProfileUser";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-bg"></div>
      <ProfileUser />
      <CreatePost />
      <Posts postData={props.postData} />
    </div>
  );
}

export default Profile;
