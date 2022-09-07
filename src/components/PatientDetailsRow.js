import React from "react";

function PatientDetailsRow({ service, deleteBooking }) {

    function handleCancelBoooking() {
        deleteBooking(service.res_id)
    }

    return (
        <tr>
            <td>{service.date}</td>
            <td>{service.time}</td>
            <td>{service.name}</td>
            <td>{service.instructor}</td>
            <td><button onClick={handleCancelBoooking} type="button" className="btn btn-danger">Cancel Booking</button></td>
        </tr>
    )
}

export default PatientDetailsRow;