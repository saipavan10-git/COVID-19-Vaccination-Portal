import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Test() {
    const [redirect, setRedirect] = useState(false);
    // const [jwt, setJwt] = useState("Current Logged out");
    // const val = "logged in"
    // let choice;

    // if (jwt == "Current Logged out") {
    //     choice = <button onClick={() => setJwt(val)}>Login</button>
    // } else {
    //     choice = <button onClick={() => setJwt("Current Logged out")}>Log out</button>
    // }
    // return (
    //     <>
    //         <h1>{jwt}</h1>
    //         <h2>{choice}</h2>
    //     </>
    // );
    let navigate = useNavigate();
    function sayHello() {
        const requestOptions = {
            method: "POST",
        };
        fetch("http://localhost:4000/v1/logout", requestOptions);
        setRedirect(true);
    }

    if (redirect) {
        navigate('/login');
    }
    const [fName, setFName] = useState('');
    useEffect(() => {

        (
            async () => {
                const response = await fetch("http://localhost:4000/v1/user", {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
                const content = await response.json();
                setFName(content.message.fName);
            }
        )()
    })
    return (
        <>
            <div className="inputStyle">

                {fName ? (<div><h1>Welcome {fName} </h1><Button variant="contained" onClick={sayHello}>Logout</Button></div>) : <div><h1>You are not logged in.</h1><Button variant="contained" component={Link} to="/login">Login</Button></div>}


            </div>



        </>
    )


}

export default Test;