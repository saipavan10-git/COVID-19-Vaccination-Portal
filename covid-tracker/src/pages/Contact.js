import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function Contact() {
    const Item = styled(Paper)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: '20px',
        boxShadow: 'none',
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }));
    const Item2 = styled(Paper)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
        boxShadow: 'none',
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }));
    return (
        <>
            <h1>Contact us!</h1>
            <div className="space40"></div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3}>

                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <>
                                <span>Sai Pavan Kamma</span>
                                <hr></hr>
                                <a href="https://github.com/saipavan10-git" target="_blank"><span style={{ textDecoration: "underline" }}>Github</span></a>
                                <div className="space40"></div>
                                <a href="https://www.linkedin.com/in/ksaipavan/?originalSubdomain=in" target="_blank"><span style={{ textDecoration: "underline" }}>linkedin</span></a>
                            </></Item>

                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <>
                                <span>Yichong Ma</span>
                                <hr></hr>
                                <a href="https://github.com/mayichong" target="_blank"><span style={{ textDecoration: "underline" }}>Github</span></a>
                                <div className="space40"></div>
                                <a href="https://www.linkedin.com/in/yichongma/" target="_blank"><span style={{ textDecoration: "underline" }}>linkedin</span></a>
                            </></Item>


                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>
                            <span>Venkateswarlu Tanneru</span>
                            <hr></hr>
                            <a href="https://github.com/Vtanneru" target="_blank"><span style={{ textDecoration: "underline" }}>Github</span></a>
                            <div className="space40"></div>
                            <a href="https://www.linkedin.com/in/venkateswarlu-tanneru-776306113/" target="_blank"><span style={{ textDecoration: "underline" }}>linkedin</span></a>

                        </Item>
                    </Grid>
                </Grid>
            </Box></>



    )
}

export default Contact;