import React, { useState } from "react";

function ConsultationAddAppointmentForm({ performAddConsultation}) {

    const [ newConsultationInput, setNewConsultationInput ] = useState({
        date: "",
        time: "",
        name: "",
        physician: "",
        description: "",
        duration: "",
        price: ""
    })

    function handleInput(event) {
        setNewConsultationInput({
            ...newConsultationInput,
            [event.target.name]: event.target.value
        })
    }

    function handleAdd() {
        const newConsultationObj = {
            date: newConsultationInput.date,
            time: newConsultationInput.time,
            name: newConsultationInput.name,
            physician: newConsultationInput.physician,
            description: newConsultationInput.description,
            duration: newConsultationInput.duration,
            price: newConsultationInput.price
        }

        performAddConsultation(newConsultationObj);

        setNewConsultationInput({
            date: "",
            time: "",
            name: "",
            physician: "",
            description: "",
            duration: "",
            price: ""
        })
    }

    return (
        <div className="row g-3 align-items-center" style={{"width" : "75%", "margin": "auto"}}>
            <h5 className="card-title">Add New Appointment</h5>
            <div className="col-auto">
                <input type="text" name="date" placeholder="MM/DD/YYYY" className="form-control" value={newConsultationInput.date} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="time" placeholder="HH:MM AM/PM" className="form-control" value={newConsultationInput.time} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="name" placeholder="Appointment Name" className="form-control" value={newConsultationInput.name} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="physician" placeholder="Physician" className="form-control" value={newConsultationInput.physician} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="description" placeholder="Description" className="form-control" value={newConsultationInput.description} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="duration" placeholder="Duration" className="form-control" value={newConsultationInput.duration} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <input type="text" name="price" placeholder="Price" className="form-control" value={newConsultationInput.price} onChange={handleInput}/>
            </div>
            <div className="col-auto">
                <button type="button" className="btn btn-secondary" onClick={handleAdd}>Add</button>
            </div>
            <p></p>
        </div>
    )
}

export default ConsultationAddAppointmentForm;