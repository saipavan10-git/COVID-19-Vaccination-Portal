import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function records(props) {
  return (
    
      <div className="inputStyle">
      <h1 style={{textAlign:"left",marginLeft: "30px",}}>Co<span class='colorchange'>Vi</span>-Book</h1>
        <h6><span class='colorchange'>Vaccination-Records</span></h6>

        <h2>Name: {props.name}</h2>
        <h2>Date of Birth: {props.birthdate}</h2>
        <h2>SSN: {props.SSN}</h2>
        <h2>Vaccine Type: _______</h2>
        <h2>Last Vaccine Shots Date: {props.firstDose}</h2>
        <h2>Next Vaccine Shots Date: {props.secondDose}</h2>
        <Button
          variant="outlined"
          style={{
            fontSize: "18px",
            color: "#3876e9",
            borderColor: "orange",
            marginTop: "20px",
          }}
        >
          Print
        </Button>
        <span style={{ marginLeft: "30px" }}></span>
        <Button
          variant="outlined"
          style={{
            fontSize: "18px",
            color: "#3876e9",
            borderColor: "orange",
            marginTop: "20px",
          }}
          component={Link}
          to="/user"
        >
          Go Back
        </Button>
      </div>
  
  );
}

export default records;
