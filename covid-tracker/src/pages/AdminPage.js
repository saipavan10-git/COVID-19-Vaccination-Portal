import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
function AdminPage(props) {


  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
    
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter>0) {setCounter(counter - 1)}
  }

  function addVaccine(values) {
    
    let you = {
        "num": counter,
        "vaccine_name":values.name,
        "vaccine_num": parseInt(values.vaccineNum),
        "state": values.vaccineState,
        "zip_code": parseInt(values.zipCode),
        "available": 1,
        
    }
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(you),
    };
    
    fetch("http://localhost:4000/v1/addVaccine", requestOptions)
        .then((response) => console.log(""))
        .then((data) => {
            console.log(data);

        });
        alert(`added successfully!`)
    window.location.reload();
}


    return (      
      <>
      <div className="inputStyle">
      <h1> Add vaccine to backend </h1>
      <Formik
                    enableReinitialize
                    initialValues={{ name: "", vaccineState: "", num: "", vaccineNum:"", zipCode:"" }}
                    onSubmit={(values) => {
                        console.log(values);
                        addVaccine(values);
                    }}
                >{({ values, handleChange, handleSubmit}) => (
                  <Form onSubmit={handleSubmit}>
                  <InputLabel>Vaccine Name</InputLabel>
                  <Input
                  name="name"
                  onChange={(e) => { handleChange(e) }}
                  value={values.name}></Input>
                  <div className="space40"></div>
                  <InputLabel>Vaccine Dose #</InputLabel>
                  <Input
                  name="vaccineNum"
                  onChange={(e) => { handleChange(e) }}
                  value={values.vaccineNum}></Input>
                  <div className="space40"></div>
                  <InputLabel>Zip Code</InputLabel>
                  <Input
                  name="zipCode"
                  onChange={(e) => { handleChange(e) }}
                  value={values.zipCode}></Input>
                  <div className="space40"></div>
                  <InputLabel>State</InputLabel>
                  <Input
                  name="vaccineState"
                  onChange={(e) => { handleChange(e) }}
                  value={values.vaccineState}></Input>
                  <div className="space40"></div>
                  <InputLabel>counter</InputLabel>
                  {counter}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <Input
                  name="num"
                  
                  onChange={(e) => { handleChange(e) }}
                  value={values.num}></Input> */}
                  <Button 
                  variant="contained"
            onClick={handleClick1} >+</Button>
            &nbsp;&nbsp;
          <Button 
          variant="contained"
            onClick={handleClick2}>-</Button>
                  <div className="space40"></div>
                  <Button variant="contained" type="submit"> Submit</Button>
                </Form>
)}
  </Formik>

      </div>
      </>
        

    )
}
export default AdminPage;