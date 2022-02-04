import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Records from "./pages/Records";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VaccineList from "./pages/VaccineList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/records" element={<Records />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<VaccineList />} />
      </Routes>
    </Router>
  );
}

export default App;
