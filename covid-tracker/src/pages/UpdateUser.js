import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const linkTarget = {
    pathname: "/user",
    key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
    state: {
        applied: true
    }
}

function UpdateUser(props) {
    let a = props.birthdate;
    const [valueDate, setValueDate] = useState(a);
    const handleBirthChange = (newValue) => {
        let dateToString = newValue.toString();
        let splitDate = dateToString.substring(4, 15);

        console.log(splitDate);
        setValueDate(splitDate);
        props.setBirthDate(splitDate);
    };
    let navigate = useNavigate();

    function sayHello(m) {
        console.log(m.birthdate);
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(m),
        };

        try {
            fetch("http://localhost:4000/v1/updateUser", requestOptions)

                .then((data) => {
                    console.log(data);
                });

            setTimeout(() => navigate(linkTarget), 1000);
        }
        catch (err) {
            console.log(err);
        }
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

                            <Button color="inherit" component={Link}
                                to="/list">Vaccine List</Button>

                        </Toolbar>
                    </AppBar>
                </Box>
                <div className="space"></div>
                <h1>Update your information:</h1>
                <Formik
                    enableReinitialize
                    initialValues={{ fName: props.name, lName: props.name2, email: props.email, password: "", confirmPassword: "", birthdate: valueDate, SSN: props.SSN }}
                    onSubmit={(values) => {
                        console.log("Value sent" + values.birthdate);
                        sayHello(values);
                        props.setName(values.fName);
                        props.set2Name(values.lName);
                        props.setBirthDate(values.birthdate);

                    }}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>

                            <Grid container spacing={1} justifyContent="center">
                                <Grid item xs={3}>
                                    <InputLabel htmlFor="input-with-icon-adornment">Email Address (Cannot Change)</InputLabel>
                                    <Input
                                        inputProps={{
                                            style: {
                                                fontSize: "30px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "400px",
                                            },
                                        }}
                                        disabled
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={(e) => { handleChange(e) }}
                                        value={values.email}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon style={{ fontSize: "32px", color: "#3876e9" }} />
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>

                                <Grid item xs={3}></Grid>
                            </Grid>
                            <div style={{ marginTop: "40px" }}></div>

                            <Grid container spacing={1} justifyContent="center">

                                <Grid item xs={3}>
                                    <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
                                    <Input
                                        onChange={(e) => { handleChange(e) }}
                                        value={values.fName}
                                        inputProps={{
                                            style: {
                                                fontSize: "25px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "300px",
                                            },
                                        }}
                                        name="fName"
                                        placeholder="First Name"
                                        type="string"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle
                                                    style={{ fontSize: "32px", color: "#3876e9" }}
                                                />
                                            </InputAdornment>
                                        }
                                    />


                                    <div style={{ marginTop: "20px" }}></div>

                                </Grid>
                                <Grid item xs={3}>
                                    <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
                                    <Input
                                        onChange={(e) => { handleChange(e) }}
                                        value={values.lName}
                                        inputProps={{
                                            style: {
                                                fontSize: "25px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "300px",
                                            },
                                        }}
                                        name="lName"
                                        placeholder="Last Name"
                                        type="String"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <AccountCircle
                                                    style={{ fontSize: "32px", color: "#3876e9" }}
                                                />
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "20px" }}></div>
                            <Grid container spacing={1} justifyContent="center">
                                <Grid item xs={3}>

                                    <InputLabel htmlFor="input-with-icon-adornment">New Password</InputLabel>
                                    <Input

                                        onChange={(e) => { handleChange(e) }}
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
                                </Grid>
                                {/* make space between email and password input */}
                                <div style={{ marginTop: "20px" }}></div>
                                <Grid item xs={3}>
                                    {/* input password */}

                                    <InputLabel htmlFor="input-with-icon-adornment">Re-enter Password</InputLabel>
                                    <Input

                                        onChange={(e) => { handleChange(e) }}
                                        value={values.confirmPassword}
                                        inputProps={{
                                            style: {
                                                fontSize: "25px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "300px",
                                            },
                                        }}
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <LockIcon style={{ fontSize: "32px", color: "#3876e9" }} />
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "40px" }}></div>
                            <div className="inputStyle">
                                <h3>In order to print your vaccination Card, you need to provide the following:</h3>
                            </div>
                            <div style={{ marginTop: "40px" }}></div>
                            <Grid container spacing={1} justifyContent="center">
                                <Grid item xs={3}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={3}>
                                            <DesktopDatePicker
                                                inputProps={{
                                                    style: {
                                                        fontSize: "25px",
                                                        fontFamily: "Georgia",
                                                        color: "#3876e9",
                                                        width: "200px",
                                                    },
                                                }}
                                                label="Birth Date"
                                                inputFormat="MM/dd/yyyy"
                                                value={values.birthdate}
                                                onChange={handleBirthChange}
                                                renderInput={(params) => <TextField {...params} />}
                                                type="date"
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={3}>

                                    <span className="SSN">SSN: ***-**-</span>

                                    <Input
                                        onChange={(e) => { handleChange(e) }}
                                        value={values.SSN}
                                        inputProps={{
                                            style: {
                                                fontSize: "25px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "200px",

                                            },
                                        }}

                                        type="number"
                                        name="SSN"
                                        placeholder="Last 4 Digit SSN"

                                    />

                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "80px" }}></div>

                            <div className="inputStyle">
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
                                    Apply
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
                                    to="/user"
                                >
                                    Back
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default UpdateUser;
