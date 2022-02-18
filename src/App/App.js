import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Left-sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Messager from "../Messager/Messager";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="content-block">
            <Sidebar />
            <Routes>
              <Route
                path="/"
                element={<Profile state={props.state.profilePage} />}
              />
              <Route
                path="/messager"
                element={
                  <Messager
                    state={props.state.messagerPage}
                    state={props.state.messagerPage}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
