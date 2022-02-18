import React from "react";
import { NavLink } from "react-router-dom";
import "./Messager.css";

function Messager(props) {
  let DialogItem = (props) => {
    return <NavLink to={"/messager/" + props.id}>{props.name}</NavLink>;
  };

  let DialogText = (props) => {
    return <p>{props.message}</p>;
  };

  let dialogElement = props.state.dialogData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messageElement = props.state.messageData.map((mess) => {
    return <DialogText message={mess.message} />;
  });

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
