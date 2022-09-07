import React from "react";

function PatientDetails({ patientDetailsObj }) {
    return (
        <div className="card text-center" style={{"width" : "75%", "margin": "auto"}}>
            <div className="card-body">
                <h4 className="card-title">{patientDetailsObj.first_name} {patientDetailsObj.last_name}</h4>
                <p className="card-text">{patientDetailsObj.email}</p>
            </div>
        </div>
    )
}

export default PatientDetails;