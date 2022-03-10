import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
function UserInfo(props) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    let navigate = useNavigate();
    const logOut = async () => {
        await fetch('http://localhost:4000/v1/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        props.setName('');
        navigate('/');
    }
    let showOrNot;
    let showOrNot2;
    let logout;
    let nothing = ", please sign in";
    if (!props.name) {
        showOrNot = <Button color="inherit" component={Link}
            to="/login">Login</Button>
        showOrNot2 = <Button color="inherit" component={Link}
            to="/signup">Sign up</Button>

    } else {
        logout = <Button color="inherit" component={Link} to="/login" onClick={logOut}>log out</Button>
    }

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <a component={Link} href="/user" className="home">Co<span className="colorchange" >Vi</span>-Book</a>
                            </Typography>
                            {showOrNot}
                            {showOrNot2}
                            <Button color="inherit" component={Link}
                                to="/list">Vaccine List</Button>
                            {logout}
                        </Toolbar>
                    </AppBar>
                </Box>
                <div className="space"></div>
                <h1>
                    Welcome {props.name ? props.name : nothing}

                </h1>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={6} md={4}>
                            <Item>
                                <p>Below are your basic information:</p>
                                <p>First Name: {props.name}</p>
                                <p>Last Name: {props.name2}</p>
                                <p>Email address: {props.email}</p></Item>

                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Item>
                                <h3>What would you like to do?</h3>
                                <div className="space40"></div>
                                <Button variant="contained" component={Link}
                                    to="/list">Click me to schedule an appointment! </Button>
                                <div className="space40" ></div>
                                <Button variant="contained" component={Link}
                                    to="/update">Click me to update information! (WIP)</Button>
                                <div className="space40"></div>
                                <Button variant="contained" component={Link}
                                    to="/records">Click me to get your certificate! (WIP)</Button>
                                <div className="space40"></div>
                                <a target="_blank" href="https://www.google.com/search?q=covid+cases&oq=covid+cases&aqs=chrome.0.69i59j0i402l2j0i433i512l2j69i60l3.1015j0j7&sourceid=chrome&ie=UTF-8"><Button variant="contained">Click me to check covid cases/news! (WIP)</Button></a>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );

}

export default UserInfo;