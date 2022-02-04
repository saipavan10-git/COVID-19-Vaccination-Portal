import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";

function Signup() {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "left", marginLeft: "30px" }}>
          Co<span class="colorchange">Vi</span>-Book
        </h1>
        <h6>
          Sign<span class="colorchange">Up</span>
        </h6>
      </div>

      <div className="inputStyle">
        <Formik
          initialValues={{ fName: "", lName: "", email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={3}>
                  <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                  <Input
                    inputProps={{
                      style: {
                        fontSize: "32px",
                        fontFamily: "Georgia",
                        color: "#3876e9",
                        width: "200px",
                      },
                    }}
                    name="fName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.fName}
                    startAdornment={
                      <InputAdornment position="start">
                        <BadgeIcon
                          style={{ fontSize: "32px", color: "#3876e9" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                  <Input
                    inputProps={{
                      style: {
                        fontSize: "32px",
                        fontFamily: "Georgia",
                        color: "#3876e9",
                        width: "200px",
                      },
                    }}
                    name="lName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.lName}
                    startAdornment={
                      <InputAdornment position="start">
                        <BadgeIcon
                          style={{ fontSize: "32px", color: "#3876e9" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>
              <div style={{ marginTop: "20px" }}></div>
              <div style={{ marginTop: "20px" }}></div>

              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={3}>
                  <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                  <Input
                    inputProps={{
                      style: {
                        fontSize: "32px",
                        fontFamily: "Georgia",
                        color: "#3876e9",
                        width: "200px",
                      },
                    }}
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    onChange={handleChange}
                    value={values.password}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon
                          style={{ fontSize: "32px", color: "#3876e9" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                  <Input
                    inputProps={{
                      style: {
                        fontSize: "32px",
                        fontFamily: "Georgia",
                        color: "#3876e9",
                        width: "200px",
                      },
                    }}
                    type="password"
                    placeholder="Confirm Password"
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon
                          style={{ fontSize: "32px", color: "#3876e9" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>

              <div style={{ marginTop: "20px" }}></div>
              <div style={{ marginTop: "20px" }}></div>
              <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
              <Input
                inputProps={{
                  style: {
                    fontSize: "32px",
                    fontFamily: "Georgia",
                    color: "#3876e9",
                    width: "300px",
                  },
                }}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon style={{ fontSize: "32px", color: "#3876e9" }} />
                  </InputAdornment>
                }
              />

              <div style={{ marginTop: "40px" }}></div>
              <Button
                variant="outlined"
                style={{
                  fontSize: "18px",
                  color: "#3876e9",
                  borderColor: "orange",
                }}
                type="submit"
              >
                Sign up
              </Button>
              <span style={{ marginLeft: "30px" }}></span>
              <Button
                variant="outlined"
                style={{
                  fontSize: "18px",
                  color: "#3876e9",
                  borderColor: "orange",
                }}
                component={Link}
                to="/"
              >
                Go back
              </Button>
              <pre>{console.log(values)}</pre>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
