import React, { useEffect, useState } from "react";

function SearchResult() {
    const [name, setName] = useState('');
    const [name2, set2Name] = useState('');
    const [email, setEmail] = useState('');
    const [vaccine, setVaccine] = useState('');
    const [vaccineNum, setVaccineNum] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [SSN, setSSN] = useState('');
    const [birthdate, setBirthDate] = useState('');

    useEffect(() => {
        fetch("http://localhost:4000/v1/displayCert")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setName(json.Great.fName);
                set2Name(json.Great.lName);
                setEmail(json.Great.email);
                setVaccine(json.Great.vaccine_name);
                setVaccineNum(json.Great.vaccine_num);
                setZipCode(json.Great.zip_code);
                setState(json.Great.state);
                setSSN(json.Great.SSN);
                setBirthDate(json.Great.birthDate);
            });
    }, []);

    return (
        <>
            <h1>We have: </h1>
            <h1>First Name: {name}</h1>
            <h1>Last Name: {name2}</h1>
            <h1>Email: {email}</h1>
            <h1>vaccine Name: {vaccine}</h1>
            <h1>Vaccine Num: {vaccineNum}</h1>
            <h1>Zip Code: {zipCode}</h1>
            <h1>State: {state}</h1>
            <h1>SSN: {SSN}</h1>
            <h1>birthDate: {birthdate}</h1>

        </>
    )
}

export default SearchResult;