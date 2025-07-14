import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Course from "./Components/Course";
import {Routes, Route } from "react-router-dom";
import Courses from "./Courses/Courses";

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/courses" element={<Courses/>} />
      </Routes>
    </>
  );
}

export default App;
