import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="left-sidebar">
      <nav className="left-sidebar__navigation">
        <a href="">Profile</a>
        <a href="">Dialog</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
