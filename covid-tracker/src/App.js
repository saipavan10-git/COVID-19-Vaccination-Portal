import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VaccineList from "./pages/VaccineList";
import UserInfo from "./pages/UserInfo";
import UpdateUser from "./pages/UpdateUser";
import Middleware from "./pages/Middleware";
import CovidCase from "./pages/CovidCase";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Code from "./pages/Code";
import Contact from "./pages/Contact";
function App() {
  const [name, setName] = useState('');
  const [name2, set2Name] = useState('');
  const [email, setEmail] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [vaccineNum, setVaccineNum] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [vaccineId, setVaccineId] = useState('');
  const [SSN, setSSN] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [FirstDose, setFirstDose] = useState('');
  const [SecondDose, setSecondDose] = useState('');
  const [change, setChange] = useState('');
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
                setBirthDate(content.message.birthDate);
                console.log(content.message.birthDate);
                setSSN(content.message.SSN);
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
                console.log(vaccineInfo);
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
    <Router >
      <Routes>
        <Route path="/" element={<Homepage name={name} setName={setName} set2Name={set2Name} setEmail={setEmail} />} />
        <Route path="/login" element={<Login setName={setName} name={name} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<VaccineList name={name} email={email} />} />
        <Route path="/user" element={<UserInfo name={name} name2={name2} email={email} setName={setName} set2Name={set2Name} setEmail={setEmail} vaccine={vaccine} vaccineId={vaccineId} vaccineNum={vaccineNum} state={state} zipCode={zipCode} change={change} birthdate={birthdate} />} />
        <Route path="/update" element={<UpdateUser name={name} name2={name2} email={email} SSN={SSN} birthdate={birthdate} setBirthDate={setBirthDate} setName={setName} set2Name={set2Name} setFDose={setFirstDose} setSDose={setSecondDose} />} />
        <Route path="/middleware" element={<Middleware change={change} setChange={setChange} />} />
        <Route path="/covidcaseall" element={<CovidCase />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/code" element={<Code />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
