import React, { useState } from "react";

function PatientAddForm({ performAddPatient }) {

    const [ newPatientInput, setNewPatientInput ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleInput(event) {
        setNewPatientInput({
            ...newPatientInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAddPatient(){
        const newPatientObj = {
            firstName: newPatientInput.firstName,
            lastName: newPatientInput.lastName,
            email: newPatientInput.email
        }

        performAddPatient(newPatientObj);

        setNewPatientInput({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}}>
            <h5 className="card-title">Add New Patient</h5>
            <div className="col-auto">
                <input type="text" name="firstName" placeholder="First name" className="form-control" value={newPatientInput.firstName} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <input type="text" name="lastName" placeholder="Last name" className="form-control" value={newPatientInput.lastName} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <input type="text" name="email" placeholder="Email name" className="form-control" value={newPatientInput.email} onChange={handleInput} />
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAddPatient}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default PatientAddForm;