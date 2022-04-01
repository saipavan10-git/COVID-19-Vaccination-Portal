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
            <h1 style={{textAlign:"left",marginLeft: "30px",}}>Co<span class='colorchange'>Vi</span>-Book</h1>
            <h6><span class='colorchange'>Vaccination Certificate</span></h6>
            <h2>First Name: {name}</h2>
            <h2>Last Name: {name2}</h2>
            <h2>Email: {email}</h2>
            <h2>Vaccine Name: {vaccine}</h2>
            <h2>Vaccine Num: {vaccineNum}</h2>
            <h2>Zip Code: {zipCode}</h2>
            <h2>State: {state}</h2>
            <h2>SSN: {SSN}</h2>
            <h2>BirthDate: {birthdate}</h2>

        </>
    )
}

export default SearchResult;