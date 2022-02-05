import React, { Component, Fragment } from "react";

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
            <table style={{ width: "500px" }}>
              <tr>
                <th>ID</th>
                <th>Vaccine Name</th>
                <th>Dose #</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Appointment</th>
              </tr>
              {vaccines.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.vaccine_name}</td>
                  <td>{m.vaccine_num}</td>
                  <td>{m.state}</td>
                  <td>{m.zip_code}</td>
                  <td>
                    <button
                      onClick={() => {
                        sayHello(m);
                      }}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </Fragment>
      );
    }
  }
}
