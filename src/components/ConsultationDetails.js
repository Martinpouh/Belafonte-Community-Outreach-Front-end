import React from "react";

function ConsultationDetails({ consultationDetailsObj }) {
    return (
        <div className="card text-center" style={{"width" : "75%", "margin": "auto"}}>
            {/* <div className="card-header">
                {consultationDetailsObj.name}
            </div> */}
            <div className="card-body">
                <h4 className="card-title">{consultationDetailsObj.name} with {consultationDetailsObj.physician}</h4>
                <p className="card-text">{consultationDetailsObj.description}</p>
                <p className="card-text">{consultationDetailsObj.duration} minutes</p>
            </div>
            {/* <div class="card-footer text-muted">
                2 days ago
            </div> */}
        </div>
    )
}

export default ConsultationDetails;