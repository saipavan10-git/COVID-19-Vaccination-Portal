import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <div>
      <div className="centered">
        <h1 style={{ textAlign: "left", marginLeft: "30px" }}>
          Co<span class="colorchange">Vi</span>-Book
          <Button
            variant="outlined"
            style={{
              marginLeft: "980px",
              fontSize: "20px",
              color: "#3876e9",
              borderColor: "#3876e9",
            }}
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <span style={{ marginLeft: "30px" }}></span>
          <Button
            variant="outlined"
            style={{
              fontSize: "18px",
              color: "#3876e9",
              borderColor: "#3876e9",
            }}
            component={Link}
            to="/signup"
          >
            Sign up
          </Button>
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
