import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Contact from "./Pages/Contact";
import About from "./Pages/About";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
