import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import PatientDetailsRow from "./PatientDetailsRow";

function PatientDetailsPage() {

    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isDeleted, setIsDeleted ] = useState(false)
    const [ patientDetailsObj, setPatientDetailsObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        services: []
    })

    const patientId = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:9292/patients/${patientId}`)
        .then(resp => resp.json())
        .then(patient => {
            setPatientDetailsObj(patient)
            setIsLoaded(!isLoaded)
        })
    }, [isDeleted])

    function deleteBooking(resId) {
        fetch(`http://localhost:9292/bookings/${resId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    return (
        <div>
            <PatientDetails patientDetailsObj={patientDetailsObj}/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Appointment</th>
                        <th scope="col">Physician</th>
                        <th scope="col">Cancel Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {patientDetailsObj.services.map((consultation) => {
                        return (
                            <PatientDetailsRow key={consultation.id} consultation={consultation} deleteBooking={deleteBooking}/>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/patients"><button type="button" className="btn btn-secondary">Go Back</button></Link>
        </div>
    )
}

export default PatientDetailsPage;