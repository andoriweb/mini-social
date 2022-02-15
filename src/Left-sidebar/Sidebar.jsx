import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="left-sidebar">
      <nav className="left-sidebar__navigation">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dialog">Dialog</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
