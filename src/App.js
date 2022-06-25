import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/access/Signup";
import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import InsideThePost from "./components/stories/InsideThePost";
import NewStory from "./components/stories/NewStory";
import "./static/styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/NewStory" element={<NewStory />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/InsideThePost" element={<InsideThePost/>} />
      </Routes>
    </div>
  );
}

export default App;
