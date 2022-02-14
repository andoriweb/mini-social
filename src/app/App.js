// import React from "react";
import "./App.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../left-sidebar/Sidebar";
import Profile from "../profile/Profile";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="content-block">
          <Sidebar />
          <Profile />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
