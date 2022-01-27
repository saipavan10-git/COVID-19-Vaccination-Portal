import React, { Fragment } from 'react'
import './App.css';
import Homepage from './pages/Homepage';
import Records from './pages/Records';
import LoginButton from './components/LoginButton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/records" element={<Records/>} />
        
      </Routes>
    </Router>

    // <LoginButton />
    
  );
}

export default App;
