// import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Left-sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialog from "../Dialog/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="content-block">
            <Sidebar />
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/dialog" component={Dialog} /> */}
            <Profile />
            {/* <Dialog /> */}
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
