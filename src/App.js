import React from "react";
import {
  WelcomeOne,
  WelcomeTwo,
  Home,
  ContactUs,
  Accounts,
  AboutUs,
  News,
  Compare,
  Login,
  Careers,
  Career,
  HRCareer
} from "./components/pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeOne />} />
        <Route path="/welcome-two" element={<WelcomeTwo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career" element={<Career />} />
        <Route path="/hr-portal" element={<HRCareer />} />
      </Routes>
    </Router>
  );
};

export default App;
