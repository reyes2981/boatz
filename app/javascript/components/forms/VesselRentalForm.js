import React, { useState } from 'react'

export default VesselRentalForm = () => {
    
    const [ rentalStartTime, setRentalStartTime ] = useState(null) // need to make sure this works like i want it to
    const [ rentalEndTime, setRentalEndTime ] = useState(null)
    const [ rentalNumOfGuests, setRentalNumOfGuests ] = useState(0)
    
    const handleStartTimeChange = (event) => {
        setRentalStartTime(event.target.value)
    }

    const handleEndTimeChange = (event) => {
        setRentalEndTime(event.target.value)
    }

    const handleNumOfGuestsChange = (event) => {
        setRentalNumOfGuests(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <input label="Start Time" type='datetime-local' onChange={handleStartTimeChange} value={rentalStartTime} required/>
                <input label="End Time" type='datetime-local' onChange={handleEndTimeChange} value={rentalEndTime} required/>
                <input label="Number of Guests" type='number' onChange={handleNumOfGuestsChange} value={rentalNumOfGuests} required/>
                <input type='submit'/>
            </form>
        </>
    )
}
