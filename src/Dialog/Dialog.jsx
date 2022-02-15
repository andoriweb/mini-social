import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialog.css";

function Dialog() {
  return (
    <div className="dialog">
      <div className="dialog-menu">
        <h3>Dialogs:</h3>
        <NavLink to="/dialog/1">John</NavLink>
        <NavLink to="/dialog/2">Silvia</NavLink>
        <NavLink to="/dialog/3">Katty</NavLink>
        <NavLink to="/dialog/4">Lusy</NavLink>
      </div>
      <div className="dialog-content">
        <p>Some text</p>
      </div>
    </div>
  );
}

export default Dialog;
