// import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Left-sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Dialog from "../Dialog/Dialog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="content-block">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Profile />}></Route>
              <Route path="/dialog" element={<Dialog />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
