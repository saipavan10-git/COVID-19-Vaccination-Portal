import React, { Component, Fragment } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Input from "@mui/material/Input";
export default class VaccineList extends Component {

  state = {
    vaccines: [],
    isLoaded: false,
  };



  constructor(props) {
    super(props);
    this.state = { value: '', searchTerm: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ searchTerm: event.target.value });

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  componentDidMount() {
    fetch("http://localhost:4000/v1/vaccines")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          vaccines: json.vaccines,
          isLoaded: true,
        });

      });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.target);
    const payload = Object.fromEntries(data.entries());


    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:4000/v1/booking", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  render() {

    const { vaccines, isLoaded } = this.state;
    function sayHello(m) {

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(m),
      };

      fetch("http://localhost:4000/v1/booking", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
      alert(
        `Congrats! You booked ${m.vaccine_name} vaccine, ${m.vaccine_num}-dose. Please bring your valid ID/Driver's license and your insurance card with you.`
      );
    }

    if (!isLoaded) {
      return <p>Loading...Please open backend server.</p>;
    } else {
      return (
        <>
          <div className="space"></div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <a component={Link} href="/" className="home">Co<span className="colorchange" >Vi</span>-Book</a>
                </Typography>
                <Button color="inherit" component={Link}
                  to="/login">Login</Button>
                <Button color="inherit" component={Link}
                  to="/signup">Sign up</Button>
                <Button color="inherit" component={Link}
                  to="/list">Vaccine List</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <div>
            <div className="searchVaccine">

              <form onSubmit={this.handleSubmit}>
                <Input
                  onChange={this.handleChange}
                  value={this.state.value}
                  inputProps={{
                    style: {
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#3876e9",
                      width: '150px'
                    },
                  }}
                  name="search"
                  placeholder="Vaccine Name"
                  type="search"

                />
                <span style={{ marginRight: "20px" }}></span>
                <Button variant="contained" type="submit">Search</Button>
              </form>

            </div>
            <table className="centerTable" >
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Vaccine Name</th>
                  <th>Dose #</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Appointment</th>
                </tr>
                {vaccines.filter((val) => {
                  if (this.state.searchTerm == "") {
                    return val;
                  } else if (val.vaccine_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                    return val;
                  }
                }).map((m) => (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>{m.vaccine_name}</td>
                    <td>{m.vaccine_num}</td>
                    <td>{m.state}</td>
                    <td>{m.zip_code}</td>
                    <td>
                      <Button
                        onClick={() => {
                          sayHello(m);
                        }}
                        variant="contained">
                        Book
                      </Button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        </>
      );
    }
  }
}
