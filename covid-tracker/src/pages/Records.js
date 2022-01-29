import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function records() {
    return (
        <>
            <div className='inputStyle'>
                <h1>User Info</h1>

                <h6>Name: ________</h6>
                <h6>Date of Birth: ________</h6>
                <h6>SSN: ________</h6>
                <h6>Vaccine Type: ________</h6>
                <h6>Last Vaccine Shots Date: ________</h6>
                <h6>Next Vaccine Shots Date: ________</h6>
                <Button variant="outlined"
                    style={{ fontSize: "18px", color: "white", borderColor: "white", marginTop: "20px" }}>Print</Button>
                <span style={{ marginLeft: "30px" }}></span>
                <Button variant="outlined"
                    style={{ fontSize: "18px", color: "white", borderColor: "white", marginTop: "20px" }}
                    component={Link} to="/">Go Back</Button>
            </div>
        </>

    )
}


export default records;
