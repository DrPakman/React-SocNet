import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} addPost={props.addPost} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
