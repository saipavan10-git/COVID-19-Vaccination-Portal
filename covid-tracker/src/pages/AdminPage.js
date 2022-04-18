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

function AdminPage(props) {

    function Counter() {
        // Set the initial count state to zero, 0
        const [count, setCount] = useState(0);

        // Create handleIncrement event handler
        const handleIncrement = () => {
            setCount(prevCount => prevCount + 1);
        };

        //Create handleDecrement event handler
        const handleDecrement = () => {
            setCount(prevCount => prevCount - 1);
        };
    };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a component={Link} href={"/AdminPage"} className="home">Co<span className="colorchange" >Vi</span>-Book</a>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="inputStyle">
        <div className="space"></div>
        <h1>
          Vaccine-<span className="colorchange">data</span>:
        </h1>
        <div style={{ marginTop: "20px" }}></div>

      </div>
    </>
  );
}
export default AdminPage;