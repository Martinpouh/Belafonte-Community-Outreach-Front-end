import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConsultationTableRow({ consultation, performDelete, performEdit }) {

    const { name, description, duration, date, time, physician, price } = consultation

    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ updatedInput, setUpdatedInput ] = useState({
        name,
        description,
        date, 
        time,
        duration,
        price, 
        physician
    })

    function handleInput(event) {
        setUpdatedInput({
            ...updatedInput,
            [event.target.name] : event.target.value
        })
    }

    function handleSave() {

        const updatedObj = {
            name: updatedInput.name,
            description: updatedInput.description,
            date: updatedInput.date,
            time: updatedInput.time,
            duration: updatedInput.duration,
            price: updatedInput.price,
            physician: updatedInput.physician
        }

        performEdit(updatedObj, consultation.id);
        handleIsEditMode();
    }

    function handleIsEditMode() {
        setIsEditMode(!isEditMode)
    }

    function handleCancel() {
        performDelete(consultation.id)
    }

    function displayRow() {
        if (!isEditMode) {
            return (
                <tr>
                    <td>{consultation.date}</td>
                    <td>{consultation.time}</td>
                    <td><Link to={`consultations/${consultation.id}`}>{consultation.name}</Link></td>
                    <td>{consultation.physician}</td>
                    <td>{consultation.patient_count}</td>
                    <td><button onClick={handleIsEditMode} type="button" className="btn btn-secondary">Edit</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><input type="text" name="date" className="form-control" value={updatedInput.date} onChange={handleInput}/></td>
                    <td><input type="text" name="time" className="form-control" value={updatedInput.time} onChange={handleInput}/></td>
                    <td><input type="text" name="name" className="form-control" value={updatedInput.name} onChange={handleInput}/></td>
                    <td><input type="text" name="physician" className="form-control" value={updatedInput.physician} onChange={handleInput}/></td>
                    <td>{consultation.patient_count}</td>
                    <td><button onClick={handleSave} type="button" className="btn btn-secondary">Save</button></td>
                    <td><button onClick={handleCancel} type="button" className="btn btn-danger">Cancel</button></td>
                </tr>
            )
        }
    }

    return (
        <>
            {displayRow()}
        </>
    )
}

export default ConsultationTableRow;