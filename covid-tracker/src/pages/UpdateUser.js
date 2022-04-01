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
    let b = props.FirstDose;
    let c = props.SecondDose;
    const [valueDate, setValueDate] = useState(a);
    const [FDose, setFDose] = useState(b);
    const [SDose, setSDose] = useState(c);
    const handleBirthChange = (newValue) => {
        setValueDate(newValue);
        props.setBirthDate(newValue);
    };
    const handleFirstDoseChange = (newValue) => {
        setFDose(newValue);
        props.setFirstDose(newValue);
    };
    const handleSecondDoseChange = (newValue) => {
        setSDose(newValue);
        props.setSecondDose(newValue);
    };
    let navigate = useNavigate();
    function sayHello(m) {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(m),
        };

        fetch("http://localhost:4000/v1/updateUser", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });

        setTimeout(() => navigate(linkTarget), 1000);

    }

    return (
        <>
            <div>
                <h1>Update your information:</h1>
                <Formik
                    enableReinitialize
                    initialValues={{ fName: props.name, lName: props.name2, email: props.email, password: "", confirmPassword: "", birthdate: valueDate, SSN: props.SSN, FirstDose:FDose, SecondDose:SDose }}
                    onSubmit={(values) => {
                        console.log(values);
                        sayHello(values);
                        props.setName(values.fName);
                        props.set2Name(values.lName);
                        props.setBirthDate((String(values.birthdate).substring(4, 15)));
                        props.setFirstDose((String(values.FirstDose).substring(4, 15)));
                        props.setSecondDose((String(values.SecondDose).substring(4, 15)));

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
                            <div style={{ marginTop: "40px" }}></div>
                            <div className="inputStyle">
                                <h3>In order to print your vaccination Card, you need to provide the following:</h3>
                            </div>
                            <div style={{ marginTop: "40px" }}></div>
                            <Grid container spacing={8} justifyContent="center">
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

                                    <span className="SSN" >SSN: </span>

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
                                        placeholder="SSN Number"
                                    />

                                </Grid>
                            </Grid>
                            <div style={{ marginTop: "20px" }}></div>

                            <Grid container spacing={8} justifyContent="center">
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
                                                label="First Dose"
                                                inputFormat="MM/dd/yyyy"
                                                value={values.FirstDose}
                                                onChange={handleFirstDoseChange}                                                
                                                renderInput={(params) => <TextField {...params} />}
                                                type="date"
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={3}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={8}>
                                            <DesktopDatePicker
                                                inputProps={{
                                                    style: {
                                                        fontSize: "25px",
                                                        fontFamily: "Georgia",
                                                        color: "#3876e9",
                                                        width: "200px",
                                                    },
                                                }}
                                                label="Second Dose"
                                                inputFormat="MM/dd/yyyy"
                                                value={values.SecondDose}
                                                onChange={handleSecondDoseChange}
                                                renderInput={(params) => <TextField {...params} />}
                                                type="date"
                                            />
                                        </Stack>
                                    </LocalizationProvider>
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
                                    Update Data
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
                                    to="/Search"
                                >
                                    Generate Certifiacate
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
