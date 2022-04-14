import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Formik, Form } from "formik";
import { useNavigate } from 'react-router-dom';
function Survey() {
    const Item2 = styled(Paper)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
        boxShadow: 'none',
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }));


    const Item = styled(Paper)(({ theme }) => ({

        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        fontSize: '20px',
        boxShadow: 'none',
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }));
    let navigate = useNavigate();
    function sayHello(m) {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(m),
        };

        fetch("http://localhost:4000/v1/survey", requestOptions)
            .then((response) => console.log(""))
            .then((data) => {
                console.log(data);
            });

        alert(`Thank you for filling out this form!`)
        navigate('/');

    }


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <a component={Link} href="/user" className="home">Co<span className="colorchange" >Vi</span>-Book</a>
                        </Typography>

                        <Button color="inherit" component={Link}
                            to="/">Home</Button>


                    </Toolbar>
                </AppBar>
            </Box>
            <div className="space"></div>
            <div className="inputStyle">
                <h1>Covid-19 Survey!</h1>

                <h3>If you have time, please fill out this survey for us to serve you better! This survey is anonymous.</h3>
                <div style={{ marginTop: "80px" }}></div>


                <Formik
                    enableReinitialize
                    initialValues={{ answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', answer6: '', answer7: '', answer8: '', answer9: '', answer10: '', answer11: '', answer12: '', }}
                    onSubmit={(values) => {
                        console.log(values);
                        sayHello(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>1. Which state are you curently located?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <input
                                                style={{ padding: "5px" }}
                                                name="answer1"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer1}
                                            ></input>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>2. What is your age group?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup

                                                aria-labelledby="demo-radio-buttons-group-label"

                                                style={{ padding: "5px" }}
                                                name="answer2"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer2}
                                            >
                                                <FormControlLabel value="less than 13" control={<Radio />} label="less than 13" />
                                                <FormControlLabel value="13 - 18" control={<Radio />} label="13 - 18" />
                                                <FormControlLabel value="19 - 25" control={<Radio />} label="19 - 25" />
                                                <FormControlLabel value="26 - 50" control={<Radio />} label="26 - 50" />
                                                <FormControlLabel value="above 50" control={<Radio />} label="above 50" />
                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>3. In the last two weeks, have you/your family members got COVID-19?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer3"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer3}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>4. In the last two weeks, have you/your family heared any relatives/friends got COVID-19?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer4"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer4}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>5. If you answered yes in #3, did you/your family members went to hospital for treatment?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer5"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer5}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>6. Do you wear masks in public? (such as campus, stores, etc)</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer6"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer6}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>7. Have you ordered COVID-19 test boxes? If so, have you received them?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup

                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer7"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer7}
                                            >
                                                <FormControlLabel value="OR" control={<Radio />} label="I ordered and I received them." />
                                                <FormControlLabel value="ONR" control={<Radio />} label="I ordered but I never received them." />
                                                <FormControlLabel value="NO" control={<Radio />} label="I did not order them." />
                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>

                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>8. In the past two weeks, have your ever had fevers, cough, or difficulty breathing?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup

                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer8"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer8}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="no" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box><div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>9. In the two weeks prior to developing symptoms, did you have contact with a known COVID-19 case?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup

                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer9"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer9}
                                            >
                                                <FormControlLabel value="yes" control={<Radio />} label="yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="no" />

                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>10. From 1 to 5, 1 being very bad, and 5 being very good, what would you like to rate this website as a whole?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer10"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer10}
                                            >
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />


                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>11. From 1 to 5, 1 being very bad, and 5 being very good, what would you like to rate on navigating through this website?</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="female"
                                                name="answer11"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer11}
                                            >
                                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                                <FormControlLabel value="5" control={<Radio />} label="5" />


                                            </RadioGroup>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div className="space40"></div>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={3} md={3}>

                                    </Grid>
                                    <Grid item xs={3} md={3}>
                                        <Item>
                                            <>

                                                <span>12. Anything you want to say to us? Please let us know!</span>

                                            </></Item>

                                    </Grid>
                                    <Grid item xs={1} md={1}>


                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Item>
                                            <TextareaAutosize
                                                aria-label="minimum height"
                                                minRows={10}
                                                placeholder="leave your feedback!"
                                                style={{ width: 300 }}
                                                name="answer12"
                                                onChange={(e) => { handleChange(e) }}
                                                value={values.answer12}
                                            />
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <div style={{ marginTop: "40px" }}></div>
                            <Button variant="contained" type="submit">Submit</Button>

                        </Form>
                    )}
                </Formik>

                <div style={{ marginTop: "100px" }}></div>
                <footer style={{ backgroundColor: "#112A7B" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} md={3}>

                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Item2>COVi-BOOK™</Item2>
                                <Item2><p style={{ fontSize: "10px" }}>Created By: Yichong Ma, Venkateswarlu Tanneru, <br></br> Sai Pavan Kamma and Lalith Phani Srinivas Kandregula</p>

                                </Item2>
                                <Item2><p style={{ fontSize: "10px" }}>A software engineering <br></br>project at UF</p></Item2>
                            </Grid>


                            <Grid item xs={4} md={4}>

                            </Grid>

                        </Grid>

                    </Box>

                </footer>
            </div>
        </>

    )
}

export default Survey;