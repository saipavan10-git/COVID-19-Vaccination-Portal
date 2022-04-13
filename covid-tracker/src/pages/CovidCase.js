import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

function CovidCase() {
    const [dataValue, setDataValue] = useState([]);

    useEffect(() => {

        axios({
            method: 'get',
            url: 'https://api.covidtracking.com/v1/us/daily.json',
        }).then(function (response) {
            setDataValue(response.data);
        })


    });



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <a component={Link} href="/user" className="home">Co<span className="colorchange" >Vi</span>-Book</a>
                        </Typography>
                        <Button color="inherit" component={Link}
                            to="/user">Profile</Button>
                        <Button color="inherit" component={Link}
                            to="/">Home</Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <div className="space"></div>
            <h1>Case history for all states</h1>
            <h3 style={{ paddingLeft: "100px", paddingRight: "100px" }}>Notice: The COVID Tracking Project has ended all data collection as of March 7, 2021. The existing API will continue to work until May 2021, but will only include data up to March 7, 2021.</h3>
            <h5 style={{ textAlign: "center" }}>Credit: https://covidtracking.com/data/api</h5>
            <div className="space40"></div>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ width: 400, margin: 'auto' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="center">States</TableCell>
                            <TableCell align="center">Positive</TableCell>
                            <TableCell align="center">Hospitalized Currently</TableCell>
                            <TableCell align="center">death</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataValue.map((row) => (

                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="center">{row.states}</TableCell>
                                <TableCell align="center">{row.positive}</TableCell>
                                <TableCell align="center">{row.hospitalizedCurrently}</TableCell>
                                <TableCell align="center">{row.death}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default CovidCase;
