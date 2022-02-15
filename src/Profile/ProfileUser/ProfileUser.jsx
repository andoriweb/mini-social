import React from "react";
import "./ProfileUser.css";
import avatar from "./Jocker.jpg";

function ProfileUser() {
  return (
    <div className="profile-user">
      <div className="profile-user__avatar">
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
      <div className="profile-user__data">
        <p>Name: John</p>
        <p>Name: John</p>
        <p>Name: John</p>
      </div>
    </div>
  );
}

export default ProfileUser;
