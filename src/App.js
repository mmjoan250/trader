import React from "react";
import { WelcomeOne, WelcomeTwo } from "./components/pages";
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
      </Routes>
    </Router>
  );
};

export default App;
