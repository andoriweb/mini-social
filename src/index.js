import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  { id: 1, title: "Hi", likes: "20" },
  { id: 2, title: "Hello", likes: "13" },
  { id: 2, title: "How are you", likes: "24" },
];

let dialogData = [
  { id: 1, name: "John" },
  { id: 2, name: "Silvia" },
  { id: 3, name: "Katty" },
  { id: 4, name: "Lusy" },
];

let messageData = [
  { id: 1, message: "John text" },
  { id: 2, message: "Silvia text" },
  { id: 3, message: "Katty text" },
  { id: 4, message: "Lusy text" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogData={dialogData}
      messageData={messageData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
