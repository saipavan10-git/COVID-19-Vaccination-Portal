import React from "react";
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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function updateUser(props) {
    return (
        <>
            <div>
                <h1>Update your information:</h1>
                <Formik
                    enableReinitialize
                    initialValues={{ fName: props.name, lName: props.name2, email: props.email, password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
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

                                    <InputLabel htmlFor="input-with-icon-adornment">Email Address (CANNOT CHANGE)</InputLabel>
                                    <Input
                                        onChange={(e) => { handleChange(e) }}
                                        value={values.email}
                                        inputProps={{
                                            style: {
                                                fontSize: "25px",
                                                fontFamily: "Georgia",
                                                color: "#3876e9",
                                                width: "300px",
                                            },
                                        }}
                                        disabled
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <EmailIcon
                                                    style={{ fontSize: "32px", color: "#3876e9" }}
                                                />
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                                {/* make space between email and password input */}
                                <div style={{ marginTop: "20px" }}></div>
                                <Grid item xs={3}>
                                    {/* input password */}

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
                            </Grid>
                            {/* make space between email and password input */}
                            <div style={{ marginTop: "40px" }}></div>
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
                            </div>
                        </Form>
                    )}
                </Formik>



                <p>Below are your basic information:</p>
                <p>First Name: {props.name}</p>
                <p>Last Name: {props.name2}</p>
                <p>Email Address: {props.email}</p>
                <p>New Password: </p>
            </div>
        </>
    );
}

export default updateUser;
