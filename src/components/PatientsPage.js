import React, { useEffect, useState } from "react";
import PatientAddForm from "./ PatientAddForm";
import  PatientsContainer from "./ PatientsContainer";

function  PatientsPage() {

    const [ patientsArray, setPatientsArray ] = useState([]);
    const [ isDeletedPatient, setIsDeletedPatient ] = useState(false)
    const [ isUpdatedPatient, setIsUpdatedPatient ] = useState(false)
    const [ isAddedPatient, setIsAddedPatient ] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/patients")
        .then(resp => resp.json())
        .then( patientsData => setPatientsArray(patientsData))
    }, [isDeletedPatient, isUpdatedPatient, isAddedPatient])

    function performDelete(deletePatientId) {
        fetch(`http://localhost:9292/patients/${deletePatientId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeletedPatient(!isDeletedPatient))
    }

    function performEdit(updatedPatientObj, patientId) {
        fetch(`http://localhost:9292/patients/${patientId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedPatientObj)
        })
        .then(data => setIsUpdatedPatient(!isUpdatedPatient))
    }

    function performAddPatient(newPatient) {
        fetch(`http://localhost:9292/patients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPatient)
        })
        .then(data => setIsAddedPatient(!isAddedPatient))
    }

    return (
        <div>
            <PatientAddForm performAddPatient={performAddPatient} />
            <PatientsContainer 
                patientsArray={patientsArray}
                performDelete={performDelete}
                performEdit={performEdit}
            />
        </div>
    )
}

export default PatientsPage;