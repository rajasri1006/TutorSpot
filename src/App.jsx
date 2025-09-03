import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Display from "./components/Display";
import Footer from "./components/Footer";

function Home() {
  return <h2 style={{ textAlign: "center" }}>Welcome to Home Page</h2>;
}

function About() {
  return <h2 style={{ textAlign: "center" }}>About TutorSpot</h2>;
}

export default function App() {
  return (
    <Router>
      <Header /> {/* Navbar always visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <Display />
      <Footer />
    </Router>
  );
}
