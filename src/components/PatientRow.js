import React from "react";

function PatientRow({ patient, index, deleteBooking }) {

    function handleCancelBoooking() {
        // console.log(patient.res_id);
        deleteBooking(patient.res_id)
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patient.first_name}</td>
            <td>{patient.last_name}</td>
            <td>{patient.email}</td>
            <td><button onClick={handleCancelBoooking} type="button" className="btn btn-danger">Cancel Booking</button></td>
        </tr>
    )
}

export default PatientRow;