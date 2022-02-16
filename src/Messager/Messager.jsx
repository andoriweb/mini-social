import React from "react";
import { NavLink } from "react-router-dom";
import "./Messager.css";

let DialogItem = (props) => {
  return <NavLink to={"/messager/" + props.id}>{props.name}</NavLink>;
};

let DialogText = (props) => {
  return <p>{props.message}</p>;
};

let dialogData = [
  { id: 1, name: "John" },
  { id: 2, name: "Silvia" },
  { id: 3, name: "Katty" },
  { id: 4, name: "Lusy" },
];

let dialogElement = dialogData.map((dialog) => {
  return <DialogItem name={dialog.name} id={dialog.id} />;
});

let messageData = [
  { id: 1, message: "John text" },
  { id: 2, message: "Silvia text" },
  { id: 3, message: "Katty text" },
  { id: 4, message: "Lusy text" },
];

let messageElement = messageData.map((mess) => {
  return <DialogText message={mess.message} />;
});

function Messager() {
  return (
    <div className="messager">
      <div className="messager-dialogs">
        <h3>Dialogs:</h3>
        {dialogElement}
      </div>
      <div className="messager-text">{messageElement}</div>
    </div>
  );
}

export default Messager;
