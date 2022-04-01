// import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import {Route} from 'react-router';
// import Login from "./Login";
// import { User } from "@auth0/auth0-react";


function Homepage(props) {
  const logOut = async () => {
    await fetch('http://localhost:4000/v1/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    props.setName('');
    props.setEmail('');
    props.set2Name('');
  }

  let showOrNot;
  let showOrNot2;
  let status;
  let logout;
  if (!props.name) {
    showOrNot = <Button color="inherit" component={Link}
      to="/login">Login</Button>
    showOrNot2 = <Button color="inherit" component={Link}
      to="/signup">Sign up</Button>
    // status = <h2>Currently you are not signed in.</h2>
  } else {
    showOrNot = <Button color="inherit" component={Link}
      to="/user">Profile</Button>
    logout = <Button color="inherit" onClick={logOut}>log out</Button>
    // status = <h2>Currently you are signed in as {props.name}</h2>
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a component={Link} href={!props.name ? "/login" : "/user"} className="home">Co<span className="colorchange" >Vi</span>-Book</a>
            </Typography>
            {/* <Button color="inherit" component={Link}
              to="/search">Records</Button> */}
            {showOrNot}
            {showOrNot2}
            <Button color="inherit" component={Link}
              to="/list">Vaccine List</Button>
            {logout}
          </Toolbar>
        </AppBar>
      </Box>
      <div className="space"></div>
      {status}
      <h1>Welcome to Covi-Book!</h1>
      <h2>A website you can check your vaccination info and more!</h2>
      <div className="centered">

      </div>
    </div>
  );
}

export default Homepage;
