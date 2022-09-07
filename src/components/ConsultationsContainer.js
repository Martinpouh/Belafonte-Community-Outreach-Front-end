import React from "react";
import ConsultationTableRow from "./ConsultationTableRow";

function ConsultationsContainer({ consultationsArray, performDelete, performEdit }) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Appointment</th>
                        <th scope="col">Physician</th>
                        <th scope="col">Enrolled</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Cancel Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {consultationsArray.map(consultation => {
                        return (
                            <ConsultationTableRow key={consultation.id} consultation={consultation} performDelete={performDelete} performEdit={performEdit}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ConsultationsContainer;