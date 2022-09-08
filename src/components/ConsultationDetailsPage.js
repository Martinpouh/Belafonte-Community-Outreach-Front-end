import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PatientRow from "./PatientRow";
import ConsultationAddPatient from "./ConsultationAddPatientForm";
import ConsultationDetails from "./ConsultationDetails";

function ConsultationDetailsPage() {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isDeleted, setIsDeleted ] = useState(false)
    const [ isAdded, setIsAdded ] = useState(false)
    const [ consultationDetailsObj, setConsultationDetailsObj ] = useState({
        name: "",
        description: "",
        time: "",
        duration: 60,
        price: 10,
        physician: "",
        patients: []
    });

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/consultations/${id}`)
        .then(resp => resp.json())
        .then(consultation => {
            setConsultationDetailsObj(consultation)
            setIsLoaded(!isLoaded)
        })
    }, [isDeleted, isAdded])

    function deleteBooking(resId) {
        fetch(`http://localhost:9292/bookings/${resId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    function addPatientToConsultation(newPatient) {
        fetch("http://localhost:9292/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPatient)
        })
        .then(resp => resp.json())
        .then(patient => {
            fetch("http://localhost:9292/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    patientId: patient.id,
                    consultationId: id
                })
            })
            setIsAdded(!isAdded)
        })
    }

    return (
        <div >
            <ConsultationDetails consultationDetailsObj={consultationDetailsObj}/>
            <ConsultationAddPatient addPatientToConsultation={addPatientToConsultation}/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cancel Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {consultationDetailsObj.patients.map((patient, index) => {
                        return (
                            <PatientRow key={patient.id} patient={patient} index={index} deleteBooking={deleteBooking}/>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/consulatations"><button type="button" className="btn btn-secondary">Go Back</button></Link>
        </div>
    )
}

export default ConsultationDetailsPage;