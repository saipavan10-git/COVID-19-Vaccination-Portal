import React, { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function AdminLogin(props) {

  const [inputPassError, setInputPassError] = useState(false);
  const [inputEmailError, setInputEmailError] = useState(false);
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })

  let navigate = useNavigate();
  function sayHello(m) {
    console.log(JSON.stringify(m));
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(m),
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };

    // eslint-disable-next-line no-unused-vars
    const response = fetch("http://localhost:4000/v1/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(
            data.error.message
          )
        } else {
          navigate('/AdminPage');
          window.location.reload();
        }

      });
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a component={Link} href={"/" } className="home">Co<span className="colorchange" >Vi</span>-Book</a>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="inputStyle">
        <div className="space"></div>
        <h1>
          A<span className="colorchange">dm</span>in Lo<span className="colorchange">gi</span>n
        </h1>
        <div style={{ marginTop: "20px" }}></div>

        <Formik

          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            sayHello(values);
          }}
          validationSchema={validate}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
              <Input
                error={inputEmailError}
                onChange={(e) => { handleChange(e); setInputEmailError(false); }}
                value={values.email}
                inputProps={{
                  style: {
                    fontSize: "25px",
                    fontFamily: "Georgia",
                    color: "#3876e9",
                    width: "300px",
                  },
                }}
                name="email"
                placeholder="Email"
                type="email"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle
                      style={{ fontSize: "32px", color: "#3876e9" }}
                    />
                  </InputAdornment>
                }
              />
              {errors.email && touched.email ? (setInputEmailError(true), (
                <div style={{ color: "red" }}>{errors.email}</div>
              )) : null}

              {/* make space between email and password input */}
              <div style={{ marginTop: "20px" }}></div>

              {/* input password */}
              <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
              <Input
                error={inputPassError}
                onChange={(e) => { handleChange(e); setInputPassError(false); }}
                value={values.password}
                inputProps={{
                  style: {
                    fontSize: "25px",
                    fontFamily: "Georgia",
                    color: "#3876e9",
                    width: "300px",
                  },
                }}
                type="password"
                name="password"
                placeholder="Password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon style={{ fontSize: "32px", color: "#3876e9" }} />
                  </InputAdornment>
                }
              />

              {errors.password && touched.password ? ((setInputPassError(true),
                <div style={{ color: "red" }}>{errors.password}</div>
              )) : null}

              {/* make space between email and password input */}
              <div style={{ marginTop: "40px" }}></div>

              {/* submit button */}
              <Button
                variant="outlined"
                style={{
                  fontSize: "18px",
                  color: "#3876e9",
                  borderColor: "orange",
                }}
                type="submit"
              >
                Login
              </Button>

            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
export default AdminLogin;