function PatientsContainer() {

    function getPatients() {
        fetch("http://localhost:9292/patients")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    function createPatient(formData) {
        const {firstName, lastName, email } = formData

        const patient = {
            firstName,
            lastName,
            email
        }

        fetch("http://localhost:9292/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(patient)
        })
        .then(resp => resp.json())
        .then(patient => console.log(patient))
    }

    function getPatient(id) {
        fetch(`http://localhost:9292/patients/${id}`)
        .then(resp => resp.json())
        .then(patient => console.log(patient))
    }

    function updatePatient(formData, patientId) {
        const {firstName, lastName, email } = formData

        const patient = {
            firstName,
            lastName,
            email
        }

        fetch(`http://localhost:9292/patients/${patientId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(patient)
        })
        .then(resp => resp.json())
        .then(patient => console.log(patient))
    }

    function deletePatient(patientId) {
        fetch(`http://localhost:9292/patients/${patientId}`, {
            method: "DELETE"
        })
    }

    // debugger;

    return (
        <div>
            This is PatientsContainer
        </div>
    )
}