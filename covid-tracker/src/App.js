import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Records from "./pages/Records";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VaccineList from "./pages/VaccineList";
import UserInfo from "./pages/UserInfo";
import UpdateUser from "./pages/updateUser";
function App() {
  const [name, setName] = useState('');
  const [name2, set2Name] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:4000/v1/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        try {
          if (response) {
            const content = await response.json();
            console.log(typeof (content));
            if (content) {
              if (content.message) {
                setName(content.message.fName);
                set2Name(content.message.lName);
                setEmail(content.message.email);
              }
            }
          }
          else
            console.log("NO USER");
        } catch {
        };

      }
    )();
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage name={name} setName={setName} set2Name={set2Name} setEmail={setEmail} />} />
        <Route path="/records" element={<Records />} />
        <Route path="/login" element={<Login setName={setName} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<VaccineList name={name} email={email} />} />
        <Route path="/user" element={<UserInfo name={name} name2={name2} email={email} setName={setName} set2Name={set2Name} setEmail={setEmail} />} />
        <Route path="/update" element={<UpdateUser name={name} name2={name2} email={email} />} />
      </Routes>
    </Router>
  );
}

export default App;
