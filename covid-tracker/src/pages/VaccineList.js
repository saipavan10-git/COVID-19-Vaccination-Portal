import React, { Component, Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default class VaccineList extends Component {
  state = {
    vaccines: [],
    isLoaded: false,
  };
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
    console.log(evt.target);
    const data = new FormData(evt.target);
    const payload = Object.fromEntries(data.entries());
    console.log(payload);

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
      return <p>Loading...</p>;
    } else {
      return (
        <Fragment>
          <div>
            <Table style={{ width: "200px" }}>
              <TableBody>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Vaccine Name</TableHead>
                  <TableHead>Dose #</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Zip Code</TableHead>
                  <TableHead>Appointment</TableHead>
                </TableRow>
                {vaccines.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>{m.id}</TableCell>
                    <TableCell>{m.vaccine_name}</TableCell>
                    <TableCell>{m.vaccine_num}</TableCell>
                    <TableCell>{m.state}</TableCell>
                    <TableCell>{m.zip_code}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          sayHello(m);
                        }}
                      >
                        Book
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Fragment>
      );
    }
  }
}
