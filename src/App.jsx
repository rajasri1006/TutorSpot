import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import About from "./components/About";
import Display from "./components/Display";
import TutorsList from "./components/TutorsList";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Header /> {/* Navbar always visible */}

      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/tutorsList" element={<TutorsList />} />
      </Routes>

      <Footer />
    </>
  );
}


