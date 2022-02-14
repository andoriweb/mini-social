// import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="grid">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mini Social</h1>
        </header>
        <aside className="sidebar">
          <nav>
            <ul>
              <li>item-1</li>
              <li>item-2</li>
              <li>item-3</li>
              <li>item-4</li>
              <li>item-5</li>
            </ul>
          </nav>
        </aside>
        <div className="content"></div>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
