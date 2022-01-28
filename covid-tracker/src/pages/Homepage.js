import React, { Component, Fragment } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


class Homepage extends Component {
    render() {
        return (
            <Fragment>

                <div>
                    <div className='centered'>
                        <h1>COVID BOOK Homepage</h1>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Button variant="outlined"
                            style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                            component={Link} to="/login"
                        >Login</Button>
                        <span style={{ marginLeft: "30px" }}></span>
                        <Button variant="outlined"
                            style={{ fontSize: "18px", color: "white", borderColor: "white" }}
                            component={Link} to="/signup"
                        >Sign up</Button>
                    </div>


                </div>

            </Fragment>


        )
    }
}

export default Homepage;