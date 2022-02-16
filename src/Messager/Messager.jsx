import React from "react";
import { NavLink } from "react-router-dom";
import "./Messager.css";

function Messager() {
  return (
    <div className="messager">
      <div className="messager-dialogs">
        <h3>Dialogs:</h3>
        <NavLink to="/messager/1">John</NavLink>
        <NavLink to="/messager/2">Silvia</NavLink>
        <NavLink to="/messager/3">Katty</NavLink>
        <NavLink to="/messager/4">Lusy</NavLink>
      </div>
      <div className="messager-text">
        <p>John text</p>
        <p>Silvia text</p>
        <p>Katty text</p>
        <p>Lusy text</p>
      </div>
    </div>
  );
}

export default Messager;
