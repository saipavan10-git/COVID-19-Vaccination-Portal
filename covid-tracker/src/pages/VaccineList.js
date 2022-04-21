import React, { Component, Fragment } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Input from "@mui/material/Input";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default class VaccineList extends Component {

  state = {
    vaccines: [],
    isLoaded: false,
    isVaccineName: false,
    isZipCode: false,
    isDoseNum: false,
    openWindow: false
  };

  constructor(props) {
    super(props);
    this.state = { value: '', searchTerm: "", placeHolder: "Vaccine Name", openWindow: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ openWindow: true })
  }

  handleClose() {
    this.setState({ openWindow: false })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ searchTerm: event.target.value });

  }
  handleChange1() {
    this.setState({ placeHolder: "Vaccine Name" });
  }
  handleChange2() {
    this.setState({ placeHolder: "Zip Code" });
  }
  handleChange3() {
    this.setState({ placeHolder: "Dose Num" });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    fetch("http://localhost:4000/v1/vaccines")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        this.setState({
          vaccines: json.data,
          isLoaded: true,
        });

      });

  }


  // handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const data = new FormData(evt.target);
  //   const payload = Object.fromEntries(data.entries());


  //   const requestOptions = {
  //     method: "POST",
  //     body: JSON.stringify(payload),
  //   };

  //   fetch("http://localhost:4000/v1/booking", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);

  //     });
  // };

  render() {

    const { vaccines, isLoaded, openWindow } = this.state;
    function sayHello(m, u) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(m),
      };

      const requestUser = {
        method: "POST",
        body: JSON.stringify(u),
      };

      fetch("http://localhost:4000/v1/receive", requestUser)
        .then((response) => response.text())
        .then((data) => {

        }).then(fetch("http://localhost:4000/v1/booking", requestOptions)
          .then((data) => {
            if (data.ok) {
              console.log(data);
              alert(
                `Congrats! You booked ${m.vaccine_name} vaccine, ${m.vaccine_num}-dose. Please bring your valid ID/Driver's license and your insurance card with you.`
              );
              window.location.replace("http://localhost:3000/code")
              // window.location.reload(false);
            } else {
              alert(
                `Something went wrong. Please try again`
              );
            }
          }));
    }

    let showOrNot;
    let showOrNot2;
    if (!this.props.name) {
      showOrNot = <Button color="inherit" component={Link}
        to="/login">Login</Button>
      showOrNot2 = <Button color="inherit" component={Link}
        to="/signup">Sign up</Button>

    } else {

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
                  <a component={Link} href={!this.props.name ? "/user" : "/login"} className="home">Co<span className="colorchange" >Vi</span>-Book</a>
                </Typography>
                {showOrNot}
                {showOrNot2}

                <Button color="inherit" component={Link}
                  to={this.props.name ? "/user" : "/login"}>Home</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <div>
            <div className="searchVaccine">

              <form onSubmit={this.handleSubmit}>

                <span style={{ marginRight: "20px" }}></span>
                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="vaccineName"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="vaccineName" control={<Radio />} label="Vaccine Name" onChange={this.handleChange1} />
                    <FormControlLabel value="zipCode" control={<Radio />} label="Zip Code" onChange={this.handleChange2} />
                    <FormControlLabel value="doseNum" control={<Radio />} label="Dose #" onChange={this.handleChange3} />
                  </RadioGroup>
                </FormControl>
                <div></div>
                <span style={{ fontSize: "30px" }}>Search:</span>
                <span style={{ marginRight: "30px" }}></span>
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
                  placeholder={this.state.placeHolder}
                  type="search"

                />
              </form>

            </div>
            <table className="centerTable" >
              <tbody>
                <tr>
                  <th>Vaccine Name</th>
                  <th>Dose #</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Appointment</th>
                </tr>
                {vaccines.filter((val) => {
                  console.log(vaccines);
                  let option = "";
                  let check = false;
                  if (this.state.placeHolder === "Vaccine Name") {
                    option = val.vaccine_name;
                    check = option.toLowerCase().includes(this.state.searchTerm.toLowerCase());

                  }
                  if (this.state.placeHolder === "Zip Code") {
                    option = val.zip_code + "";
                    check = option.includes(this.state.searchTerm);
                  }
                  if (this.state.placeHolder === "Dose Num") {
                    option = val.vaccine_num + "";
                    check = option.includes(this.state.searchTerm);
                  }

                  if (this.state.searchTerm === "") {
                    return val;
                  }
                  else if (check) {
                    return val;
                  }
                }).map((m) => (
                  <tr key={m.id}>
                    {m.available === 1 ? <><td>{m.vaccine_name}</td>
                      <td>{m.vaccine_num}</td>
                      <td>{m.state}</td>
                      <td>{m.zip_code}</td>
                      <td>

                        <Button
                          id="vaccinebook"
                          onClick={() => {
                            sayHello(m, this.props.email);
                          }}
                          variant="contained">
                          Book
                        </Button>

                      </td></> : <></>}

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
