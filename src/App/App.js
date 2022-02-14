// import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Left-sidebar/Sidebar";
import Profile from "../Profile/Profile";

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
