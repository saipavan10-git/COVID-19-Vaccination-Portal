import React, { Fragment, useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import BadgeIcon from '@mui/icons-material/Badge';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Signup() {


    return (
        <Fragment>



            <div>
                <div className='centered'>
                    <h1>COVID BOOK Signup</h1>
                </div>

                <div className='inputStyle'>


                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={3}>
                            <InputLabel htmlFor="input-with-icon-adornment">

                            </InputLabel>
                            <Input
                                inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '200px' } }}
                                id="input-with-icon-adornment"
                                placeholder='First Name'
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

                                id="input-with-icon-adornment"
                                placeholder='Last Name'
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
                                id="input-with-icon-adornment"
                                placeholder='Create Password'
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
                                id="input-with-icon-adornment"
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
                        id="input-with-icon-adornment"
                        placeholder='Email'
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon style={{ fontSize: '32px', color: 'white' }} />
                            </InputAdornment>
                        }
                    />

                    {/* <div style={{ marginTop: '20px' }}></div>
                    <InputLabel htmlFor="input-with-icon-adornment">

                    </InputLabel>


                    <Input
                        inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '300px' } }}

                        id="input-with-icon-adornment"
                        placeholder='Birthday'

                        startAdornment={

                            <InputAdornment position="start">
                                <CakeIcon style={{ fontSize: '32px', color: 'white' }} />
                            </InputAdornment>

                        }
                    /> */}



                    <div style={{ marginTop: '40px' }}></div>
                    <Button variant="outlined"
                        style={{ fontSize: "18px", color: "white", borderColor: "white" }}

                    >Sign up</Button>
                    <span style={{ marginLeft: "30px" }}></span>
                    <Button variant="outlined"
                        style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                        component={Link} to="/"
                    >Go back</Button>
                </div>

            </div>

        </Fragment>


    )
}

export default Signup;