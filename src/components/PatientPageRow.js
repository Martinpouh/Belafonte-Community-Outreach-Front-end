import React, { useState } from "react";
import { Link } from "react-router-dom";

function PatientPageRow({ patient, performDelete, performEdit }) {

    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ patientInfo, setPatientInfo ] = useState({
        first: patient.first_name,
        last: patient.last_name,
        email: patient.email
    })

    function handleInput(event) {
        setPatientInfo({
            ...patientInfo,
            [event.target.name]: event.target.value
        })
    }

    function handleSave() {
        
        const updatedObj = {
            firstName: patientInfo.first,
            lastName: patientInfo.last,
            email: patientInfo.email
        }

        performEdit(updatedObj, patient.id);
        handleIsEditMode();
    }

    function handleIsEditMode() {
        setIsEditMode(!isEditMode)
    }

    function handleDelete() {
        performDelete(patient.id)
    }

    function displayRow() {
        if (!isEditMode) {
            return (
                <tr>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.email}</td>
                    <td><Link to={`patients/${patient.id}`}>{patient.consultation_count}</Link></td>
                    <td><button type="button" className="btn btn-secondary" onClick={handleIsEditMode}>Edit</button></td>
                    <td><button type="button" className="btn btn-danger" onClick={handleDelete} >Delete</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="first" className="form-control" value={patientInfo.first} onChange={handleInput}/></td>
                    <td><input type="text" name="last" className="form-control" value={patientInfo.last} onChange={handleInput}/></td>
                    <td><input type="text" name="email" className="form-control" value={patientInfo.email} onChange={handleInput}/></td>
                    <td>{patient.consultation_count}</td>
                    <td><button type="button" className="btn btn-secondary" onClick={handleSave}>Save</button></td>
                    <td><button type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        }
    }

    return (
        <>
            {displayRow()}
        </>
    )
}

export default PatientPageRow;