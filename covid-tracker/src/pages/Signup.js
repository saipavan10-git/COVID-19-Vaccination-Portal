import React, { useState } from "react";
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [inputPassError, setInputPassError] = useState(false);
  const [inputEmailError, setInputEmailError] = useState(false);
  const [inputFNameError, setInputFNameError] = useState(false);
  const [inputLNameError, setInputLNameError] = useState(false);
  const [inputRePassError, setInputRePassError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),

    fName: Yup.string().required('First name is required'),
    lName: Yup.string().required('Last name is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  let navigate = useNavigate();
  function sayHello(m) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(m),
    };

    fetch("http://localhost:4000/v1/test", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    setRedirect(true);

  }

  if (redirect) {
    navigate('/login');
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a component={Link} href="/" className="home">Co<span className="colorchange" >Vi</span>-Book</a>
            </Typography>
            <Button color="inherit" component={Link}
              to="/login">Login</Button>
            <Button color="inherit" component={Link}
              to="/signup">Sign up</Button>
            <Button color="inherit" component={Link}
              to="/list">Vaccine List</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <div>
          <div className="space"></div>
          <h1>
            Sign <span className="colorchange">Up</span>
          </h1>
        </div>

        <div className="inputStyle">
          <Formik
            initialValues={{ fName: "", lName: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => {
              console.log(values);
              sayHello(values);
            }}
            validationSchema={validate}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={3}>
                    <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                    <Input
                      error={inputFNameError}
                      inputProps={{
                        style: {
                          fontSize: "30px",
                          fontFamily: "Georgia",
                          color: "#3876e9",
                          width: "200px",
                        },
                      }}
                      name="fName"
                      placeholder="First Name"
                      onChange={(e) => { handleChange(e); setInputFNameError(false); }}
                      value={values.fName}
                      startAdornment={
                        <InputAdornment position="start">
                          <BadgeIcon
                            style={{ fontSize: "32px", color: "#3876e9" }}
                          />
                        </InputAdornment>
                      }
                    />
                    {errors.fName && touched.fName ? (setInputFNameError(true), (
                      <div style={{ color: "red" }}>{errors.fName}</div>
                    )) : null}
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                    <Input
                      error={inputLNameError}
                      inputProps={{
                        style: {
                          fontSize: "30px",
                          fontFamily: "Georgia",
                          color: "#3876e9",
                          width: "200px",
                        },
                      }}
                      name="lName"
                      placeholder="Last Name"
                      onChange={(e) => { handleChange(e); setInputLNameError(false); }}
                      value={values.lName}
                      startAdornment={
                        <InputAdornment position="start">
                          <BadgeIcon
                            style={{ fontSize: "32px", color: "#3876e9" }}
                          />
                        </InputAdornment>
                      }
                    />
                    {errors.lName && touched.lName ? (setInputLNameError(true), (
                      <div style={{ color: "red" }}>{errors.lName}</div>
                    )) : null}
                  </Grid>
                </Grid>
                <div style={{ marginTop: "20px" }}></div>
                <div style={{ marginTop: "20px" }}></div>

                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={3}>
                    <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                    <Input
                      error={inputPassError}
                      inputProps={{
                        style: {
                          fontSize: "30px",
                          fontFamily: "Georgia",
                          color: "#3876e9",
                          width: "200px",
                        },
                      }}
                      type="password"
                      name="password"
                      placeholder="Create Password"
                      onChange={(e) => { handleChange(e); setInputPassError(false); }}
                      value={values.password}
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon
                            style={{ fontSize: "32px", color: "#3876e9" }}
                          />
                        </InputAdornment>
                      }
                    />
                    {errors.password && touched.password ? (setInputPassError(true), (
                      <div style={{ color: "red" }}>{errors.password}</div>
                    )) : null}
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                    <Input
                      error={inputRePassError}
                      onChange={(e) => { handleChange(e); setInputRePassError(false); console.log(inputRePassError); }}
                      inputProps={{
                        style: {
                          fontSize: "30px",
                          fontFamily: "Georgia",
                          color: "#3876e9",
                          width: "200px",
                        },
                      }}
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      placeholder="Confirm Password"
                      startAdornment={
                        <InputAdornment position="start">
                          <LockIcon
                            style={{ fontSize: "32px", color: "#3876e9" }}
                          />
                        </InputAdornment>
                      }
                    />{errors.confirmPassword && touched.confirmPassword ? (setInputRePassError(true), (
                      <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                    )) : null}
                  </Grid>
                </Grid>

                <div style={{ marginTop: "40px" }}></div>

                <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
                <Input
                  error={inputEmailError}
                  inputProps={{
                    style: {
                      fontSize: "30px",
                      fontFamily: "Georgia",
                      color: "#3876e9",
                      width: "300px",
                    },
                  }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => { handleChange(e); setInputEmailError(false); }}
                  value={values.email}
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon style={{ fontSize: "32px", color: "#3876e9" }} />
                    </InputAdornment>
                  }
                />
                {errors.email && touched.email ? (setInputEmailError(true), (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )) : null}

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
    </>
  );
}

export default Signup;
