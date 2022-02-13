import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Test() {

    const [jwt, setJwt] = useState("Current Logged out");
    const val = "logged in"
    let choice;

    if (jwt == "Current Logged out") {
        choice = <button onClick={() => setJwt(val)}>Login</button>
    } else {
        choice = <button onClick={() => setJwt("Current Logged out")}>Log out</button>
    }
    return (
        <>
            <h1>{jwt}</h1>
            <h2>{choice}</h2>
        </>
    );
}

export default Test;