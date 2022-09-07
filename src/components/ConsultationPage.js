import React, { useEffect, useState } from "react";
import ConsultationAddAppointmentForm from "./ConsultationAddAppointmentForm";
import ConsultationsContainer from "./ConsultationsContainer";

function ConsultationsPage() {

    const [ consultationsArray, setConsultationsArray ] = useState([]);
    const [ isDeletedConsultation, setIsDeletedConsultation ] = useState(false);
    const [ isUpdatedConsultation, setIsUpdatedConsultation ] = useState(false);
    const [ isAddedConsultation, setIsAddedConsultation ] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9292/consultations")
        .then(resp => resp.json())
        .then(data => setConsultationsArray(data))
    }, [isDeletedConsultation, isUpdatedConsultation, isAddedConsultation])

    function performDelete(deleteConsultationId) {
        fetch(`http://localhost:9292/consultations/${deleteConsultationId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeletedConsultation(!isDeletedConsultation))
    }

    function performEdit(updatedConsultationObj, consultationId) {
        fetch(`http://localhost:9292/consultations/${consultationId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedConsultationObj)
        })
        .then(data => setIsUpdatedConsultation(!isUpdatedConsultation))
    }

    function performAddConsultation(newConsultation) {
        fetch("http://localhost:9292/consultations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newConsultation)
        })
        .then(data => setIsAddedConsultation(!isAddedConsultation))
    }

    return (
        <div>
            <ConsultationAddAppointmentForm performAddConsultation={performAddConsultation}/>
            <ConsultationsContainer 
                consultationsArray={consultationsArray} 
                performDelete={performDelete}
                performEdit={performEdit}
            />
        </div>
    )
}

export default ConsultationsPage;