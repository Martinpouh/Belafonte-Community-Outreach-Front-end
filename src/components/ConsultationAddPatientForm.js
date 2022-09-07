import React, { useState } from "react";

function ConsultationAddPatientForm({ addPatientToConsultation }) {

    const [ patientInput, setPatientInput ] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handlePatientInput(event) {
        setPatientInput({
            ...patientInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAddPatient() {
        const patientObj = {
            firstName: patientInput.firstName,
            lastName: patientInput.lastName,
            email: patientInput.email
        }
        addPatientToConsultation(patientObj)
        setPatientInput({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}} >
            <div className="col-auto">
                <input type="text" name="firstName" placeholder="First name" className="form-control" onChange={handlePatientInput} value={patientInput.firstName}/>
            </div>
            <div className="col-auto">
                <input type="text" name="lastName" placeholder="Last name" className="form-control" onChange={handlePatientInput} value={patientInput.lastName} />
            </div>
            <div className="col-auto">
                <input type="text" name="email" placeholder="Email name" className="form-control" onChange={handlePatientInput} value={patientInput.email} />
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAddPatient}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default ConsultationAddPatientForm;