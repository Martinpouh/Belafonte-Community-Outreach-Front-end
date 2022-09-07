import React from "react";
import PatientPageRow from "./PatientPageRow";

function PatientsContainer({ patientsArray, performDelete, performEdit }) {
    return (
        <div>
            {console.log(patientsArray)}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Class Count</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsArray.map(patient => {
                        return (
                            <PatientPageRow key={patient.id} patient={patient} performDelete={performDelete} performEdit={performEdit} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PatientsContainer;