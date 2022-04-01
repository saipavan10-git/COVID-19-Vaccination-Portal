import React, { useState } from "react";
import { Formik } from "formik";
import Input from "@mui/material/Input";
import { Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const linkTarget = {
    pathname: "/searchResult",
    key: Math.random(), // we could use Math.random, but that's not guaranteed unique.
    state: {
        applied: true
    }
}

function Search() {
    let navigate = useNavigate();
    function sayHello(m) {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(m),
        };

        fetch("http://localhost:4000/v1/searchCode", requestOptions)
            .then((data) => {
                console.log(data);

            });

        setTimeout(() => navigate(linkTarget), 2000);
    }

    return (
        <>
            <div className="inputStyle">
                <h1>Enter your Vaccination Code!</h1>

                <Formik
                    initialValues={{ search: "" }}
                    onSubmit={(values) => {
                        sayHello(values);
                    }}

                >{({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={1.5}>
                            <Input

                                inputProps={{
                                    style: {
                                        fontSize: "30px",
                                        fontFamily: "Georgia",
                                        color: "#3876e9",
                                        width: "200px",
                                        textAlign :"center",
                                    },
                                }}
                                name="search"
                                placeholder="Enter code"
                                
                                onChange={(e) => { handleChange(e); }}
                                value={values.search}
                            />
                            <div style={{ marginTop: "20px" }}></div>
                        </Grid> 

                        <Grid item xs={1.5}>
                            <Button
                                variant="outlined"
                                style={{
                                    fontSize: "18px",
                                    color: "#3876e9",
                                    borderColor: "orange",
                                }}
                                type="submit"
                            >
                                GO
                            </Button>
                        </Grid>
                    </Grid>
                    </form>)}</Formik>
            </div>
        </>
    )
}

export default Search;