import React, { Component, Fragment } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



class Login extends Component {
    render() {
        return (
            <Fragment>

                <div>
                    <div className='centered'>
                        <h1>COVID BOOK</h1>
                    </div>

                    <div className='inputStyle'>

                        <InputLabel htmlFor="input-with-icon-adornment">

                        </InputLabel>
                        <Input
                            inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '300px' } }}
                            id="input-with-icon-adornment"
                            placeholder='Email'
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle style={{ fontSize: '32px', color: 'white' }} />
                                </InputAdornment>
                            }
                        />
                        <div style={{ marginTop: '20px' }}></div>
                        <InputLabel htmlFor="input-with-icon-adornment">

                        </InputLabel>
                        <Input
                            inputProps={{ style: { fontSize: 40, fontFamily: 'Dongle', color: 'white', width: '300px' } }}
                            type="password"
                            id="input-with-icon-adornment"
                            placeholder='Password'
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockIcon style={{ fontSize: '32px', color: 'white' }} />
                                </InputAdornment>
                            }
                        />
                        <div style={{ marginTop: '40px' }}></div>
                        <Button variant="outlined"
                            style={{ fontSize: "18px", color: "white", borderColor: "white" }}

                        >Login</Button>
                        <span style={{ marginLeft: "30px" }}></span>
                        <Button variant="outlined"
                            style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                            component={Link} to="/signup"
                        >Sign up</Button>
                        <div style={{ marginTop: "20px" }}>
                            <Button variant="outlined"
                                style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                                component={Link} to="/records"
                            >Records</Button>
                        </div>

                    </div>

                </div>

            </Fragment>


        )
    }
}

export default Login;