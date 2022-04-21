import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Code() {
    const [name, setName] = useState('');


    useEffect(() => {
        fetch("http://localhost:4000/v1/code")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setName(json.Great.search)
            });
    }, []);

    return (
        <>
            <h1>Your code is:{name}</h1>
            <h1>Please save this code for future reference.</h1>
            <div className="inputStyle"><Button id="goback" component={Link}
                to="/user" variant="contained">Go back</Button></div>


        </>
    )
}

export default Code;