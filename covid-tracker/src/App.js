import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Records from "./pages/Records";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VaccineList from "./pages/VaccineList";
import Test from "./pages/Test";
function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:4000/v1/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const content = await response.json();

        if (content) {
          console.log(content.message.fName);
          setName(content.message.fName);
        } else
          console.log("NO USER");

      }
    )();
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage name={name} setName={setName} />} />
        <Route path="/records" element={<Records />} />
        <Route path="/login" element={<Login setName={setName} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<VaccineList />} />
        <Route path="/test" element={<Test name={name} />} />
      </Routes>
    </Router>
  );
}

export default App;
