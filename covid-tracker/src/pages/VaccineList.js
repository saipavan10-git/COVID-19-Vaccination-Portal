import React, { Component, Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
                })
            })

    }

    render() {
        const { vaccines, isLoaded } = this.state;

        if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Fragment>
                    <div>
                        <table>
                            <tr>

                                <th>ID</th>
                                <th>Vaccine Name</th>
                                <th>Dose #</th>
                                <th>State</th>
                                <th>Zip Code</th>
                            </tr>
                            {vaccines.map((m) => (
                                <tr key={m.id}>
                                    <td>{m.id}</td>
                                    <td>{m.vaccine_name}</td>
                                    <td>{m.vaccine_num}</td>
                                    <td>{m.state}</td>
                                    <td>{m.zip_code}</td>
                                </tr>
                            )
                            )}


                        </table>
                    </div>



                </Fragment >



            );
        }
    }
}