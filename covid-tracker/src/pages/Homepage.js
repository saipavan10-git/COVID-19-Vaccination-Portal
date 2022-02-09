import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Homepage() {
  return (
    <div>
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
      <div className="space"></div>
      <h1>
        Homepage
      </h1>
      <div className="centered">

      </div>
    </div>
  );
}

export default Homepage;
