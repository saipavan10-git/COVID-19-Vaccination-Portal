import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import Grid from '@mui/material/Grid';
import { Formik } from 'formik';

function Signup() {
    return (
        <>
            <div>
                <div>
                    <h1>COVID BOOK Signup</h1>
                </div>

                <div className='inputStyle'>

                    <Formik
                        initialValues={{ fName: '', lName: '', email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={1} justifyContent="center">
                                    <Grid item xs={3}>

                                        <InputLabel htmlFor="input-with-icon-adornment">

                                        </InputLabel>
                                        <Input
                                            inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '200px' } }}
                                            name="fName"
                                            placeholder='First Name'
                                            onChange={handleChange}
                                            value={values.fName}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <BadgeIcon style={{ fontSize: '32px', color: 'white' }} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <InputLabel htmlFor="input-with-icon-adornment">

                                        </InputLabel>
                                        <Input
                                            inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '200px' } }}

                                            name="lName"
                                            placeholder='Last Name'
                                            onChange={handleChange}
                                            value={values.lName}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <BadgeIcon style={{ fontSize: '32px', color: 'white' }} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>

                                </Grid>
                                <div style={{ marginTop: '20px' }}></div>
                                <div style={{ marginTop: '20px' }}></div>

                                <Grid container spacing={1} justifyContent="center">
                                    <Grid item xs={3}>
                                        <InputLabel htmlFor="input-with-icon-adornment">

                                        </InputLabel>
                                        <Input
                                            inputProps={{ style: { fontSize: 35, fontFamily: 'Dongle', color: 'white', width: '200px' } }}
                                            type="password"
                                            name="password"
                                            placeholder='Create Password'
                                            onChange={handleChange}
                                            value={values.password}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockIcon style={{ fontSize: '32px', color: 'white' }} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <InputLabel htmlFor="input-with-icon-adornment">

                                        </InputLabel>
                                        <Input
                                            inputProps={{ style: { fontSize: 35, fontFamily: 'Dongle', color: 'white', width: '200px' } }}
                                            type="password"

                                            placeholder='Confirm Password'
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockIcon style={{ fontSize: '32px', color: 'white' }} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>

                                </Grid>

                                <div style={{ marginTop: '20px' }}></div>
                                <div style={{ marginTop: '20px' }}></div>
                                <InputLabel htmlFor="input-with-icon-adornment">

                                </InputLabel>
                                <Input
                                    inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '300px' } }}
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    onChange={handleChange}
                                    value={values.email}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <EmailIcon style={{ fontSize: '32px', color: 'white' }} />
                                        </InputAdornment>
                                    }
                                />

                                <div style={{ marginTop: '40px' }}></div>
                                <Button variant="outlined"
                                    style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                                    type='submit'
                                >Sign up</Button>
                                <span style={{ marginLeft: "30px" }}></span>
                                <Button variant="outlined"
                                    style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                                    component={Link} to="/"
                                >Go back</Button>
                                <pre>{console.log(values)}</pre>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Signup;
