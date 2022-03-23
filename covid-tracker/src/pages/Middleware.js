import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Middleware(props) {
    let navigate = useNavigate();
    const linkTarget = {
        pathname: "/user",
        key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
        state: {
            applied: true
        }
    }

    return (

        <>
            <div className="inputStyle">
                <h1>Update successful!</h1>
                <p>{props.change}</p>
                <Button variant="contained" component={Link} to={linkTarget}>Click here to redirect</Button>
            </div>
        </>

    )
}

export default Middleware;