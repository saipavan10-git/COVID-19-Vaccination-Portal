import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Test(props) {


    return (
        <div>
            {console.log(props.name)}
            {props.name ? <h1>{props.name}</h1> : <h1>nothing</h1>}
            <Button variant="contained" component={Link}
                to="/">Home</Button>
        </div>
    )

}

export default Test;