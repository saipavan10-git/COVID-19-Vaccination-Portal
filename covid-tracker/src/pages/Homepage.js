import React, { useState, component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Homepage(props) {
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



  const logOut = async () => {
    await fetch('http://localhost:4000/v1/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    props.setName('');
    props.setEmail('');
    props.set2Name('');
  }

  let showOrNot;
  let showOrNot2;
  let status;
  let logout;
  if (!props.name) {
    showOrNot = <Button color="inherit" component={Link}
      to="/login">Login</Button>
    showOrNot2 = <Button color="inherit" component={Link}
      to="/signup">Sign up</Button>
    // status = <h2>Currently you are not signed in.</h2>
  } else {
    showOrNot = <Button color="inherit" component={Link}
      to="/user">Profile</Button>
    logout = <Button color="inherit" onClick={logOut}>log out</Button>
    // status = <h2>Currently you are signed in as {props.name}</h2>
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a component={Link} href={!props.name ? "/login" : "/user"} className="home">Co<span className="colorchange" >Vi</span>-Book</a>
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
      {status}
      <h1>Welcome to Covi-Book!</h1>
      <h2>A website you can check your vaccination info and more!</h2>
      <div className="inputStyle">

        <img src={require('../images/vaccineBooking.png')} className="imgSize" />
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>

          </Grid>
          <Grid item xs={2} md={2}>
            <Item>
              <>
                <h2>
                  What is COVID-19?
                </h2>
                <hr></hr>
                <img src={require('../images/virus.png')} /> </></Item>

          </Grid>
          <Grid item xs={1} md={1}>


          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <h3>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</h3>
              <h3>The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. </h3>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div style={{ marginTop: "80px" }}></div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>

          </Grid>
          <Grid item xs={2} md={2}>
            <Item>
              <>
                <h2>
                  What are the symptoms of COVID-19?
                </h2>
                <hr></hr>
                <img src={require('../images/sym.png')} /> </></Item>

          </Grid>
          <Grid item xs={1} md={1}>


          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <h3>Symptoms include these following: </h3>
              <h3>
                <ul className="b">
                  <li>Cough</li>
                  <li>Fever or chills</li>
                  <li>Shortness of breath or difficulty breathing</li>
                  <li>Fatigue</li>
                  <li>Muscle or body aches</li>
                  <li>Headache</li>
                  <li>New loss of taste or smell</li>
                  <li>Sore throat</li>
                  <li>Congestion or runny nose</li>
                  <li>Nausea or vomiting</li>
                  <li>Diarrhea</li>
                </ul>
              </h3>
              <div className="space40"></div>
              <h4>Note: Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:</h4>
              <h4>Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. </h4>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div style={{ marginTop: "100px" }}></div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>

          </Grid>
          <Grid item xs={2} md={2}>
            <Item>
              <>
                <h2>
                  How to prevent COVID-19?
                </h2>
                <hr></hr>
                <img src={require('../images/prevent.png')} /> </></Item>

          </Grid>
          <Grid item xs={1} md={1}>


          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <h3>The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.</h3>
              <h3>Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. </h3>
              <h2 style={{ color: "red" }}>Get vaccinated when it’s your turn and follow local guidance.</h2>

            </Item>
          </Grid>
        </Grid>
      </Box>
      <div style={{ marginTop: "100px" }}></div>
      <footer style={{ backgroundColor: "#112A7B" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
              <Item2>COVi-BOOK™</Item2>
              <Item2><p style={{ fontSize: "10px" }}>Created By: Yichong Ma, Venkateswarlu Tanneru, <br></br> Sai Pavan Kamma and Lalith Phani Srinivas Kandregula</p>

              </Item2>
              <Item2><p style={{ fontSize: "10px" }}>A software engineering <br></br>project at UF</p></Item2>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item2>
                <>
                  <h2>
                    Get more info
                  </h2>
                  <hr></hr>
                  <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>WHO Website</p></a>
                  <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>CDC Website</p></a>
                  <a href="https://www.whio.com/news/trending/covid-19-cdc-extend-travel-mask-mandate-reports/HXM4AGIW2JHDJAK7JZ2EPZ654Y/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Whio Website</p></a>
                  <a href="https://floridahealthcovid19.gov/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Florida department</p></a>
                </>
              </Item2>
            </Grid>

            <Grid item xs={2} md={2}>
              <Item2>
                <>
                  <h2>
                    Vaccine Company
                  </h2>
                  <hr></hr>
                  <a href="https://www.pfizer.com/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Pfizer</p></a>
                  <a href="https://www.modernatx.com/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Moderna</p></a>
                  <a href="https://www.jnj.com/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Johnson & Johnson</p></a>
                </>
              </Item2>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item2>
                <>
                  <h2>
                    Covid Case Stats
                  </h2>
                  <hr></hr>
                  <a href="https://www.worldometers.info/coronavirus/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>World O Meter</p></a>
                  <a href="https://coronavirus.jhu.edu/map.html" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Johns Hopkins University</p></a>
                  <a href="https://www.nytimes.com/interactive/2021/world/covid-cases.html" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>NY Times</p></a>
                  <a href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home/" target="_blank"><p style={{ fontSize: "15px", textDecoration: "underline" }}>CDC Covid Data</p></a>
                </>
              </Item2>
            </Grid>
            <Grid item xs={2} md={2}>
              <Item2>
                <>
                  <h2>
                    Contact us
                  </h2>
                  <hr></hr>
                  <a component={Link}
                    href="/contact"><p style={{ fontSize: "15px", textDecoration: "underline" }}>Contact us</p></a>
                </>
              </Item2>
              <div style={{ marginTop: "200px" }}></div>
            </Grid>
          </Grid>

        </Box>

      </footer>
    </div >
  );
}

export default Homepage;
