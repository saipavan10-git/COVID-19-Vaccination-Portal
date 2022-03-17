import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Records from "./pages/Records";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VaccineList from "./pages/VaccineList";
import UserInfo from "./pages/UserInfo";
import UpdateUser from "./pages/UpdateUser";
import Middleware from "./pages/Middleware";
function App() {
  const [name, setName] = useState('');
  const [name2, set2Name] = useState('');
  const [email, setEmail] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [vaccineNum, setVaccineNum] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [vaccineId, setVaccineId] = useState('');
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

        const appointment = await fetch('http://localhost:4000/v1/appoint', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });


        try {
          if (appointment) {

            const vaccineInfo = await appointment.json();

            if (vaccineInfo) {
              if (vaccineInfo.message) {
                console.log(vaccineInfo.message);
                setVaccineId(vaccineInfo.message.id);
                setVaccine(vaccineInfo.message.vaccine_name);
                setVaccineNum(vaccineInfo.message.vaccine_num);
                setState(vaccineInfo.message.state);
                setZipCode(vaccineInfo.message.zip_code);
              }
            }
          }
          else

            console.log("No Appointment");
        } catch {

        };
      }
    )

      ();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage name={name} setName={setName} set2Name={set2Name} setEmail={setEmail} />} />
        <Route path="/records" element={<Records />} />
        <Route path="/login" element={<Login setName={setName} name={name} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<VaccineList name={name} email={email} />} />
        <Route path="/user" element={<UserInfo name={name} name2={name2} email={email} setName={setName} set2Name={set2Name} setEmail={setEmail} vaccine={vaccine} vaccineId={vaccineId} vaccineNum={vaccineNum} state={state} zipCode={zipCode} />} />
        <Route path="/update" element={<UpdateUser name={name} name2={name2} email={email} />} />
        <Route path="/middleware" element={<Middleware />} />
      </Routes>
    </Router>
  );
}

export default App;
