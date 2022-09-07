function BookingsContainer() {

    function getBookings() {
        fetch("http://localhost:9292/bookings")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            BookingsContainer
            {console.log(getBookings())}
        </div>
    )
}

export default BookingsContainer;