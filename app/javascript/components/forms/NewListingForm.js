import React, { useState } from 'react'

export default NewListingForm = () => {

    const [ listingPrice, setListingPrice ] = useState(0)
    const [ listingAvailability, setListingAvailabilty ] = useState(new Date().toLocaleString()) // need to make sure this works like i want it to
    const [ listingDescription, setListingDescription ] = useState('')

    const handlePriceChange = (event) => {
        setListingPrice(event.target.value)
    }

    const handleAvailabilityChange = (event) => {
        setListingAvailabilty(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setListingDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <input label="Price" type='number' onChange={handlePriceChange} value={listingPrice} required/>
                <input label="Available Start" type='date' onChange={handleAvailabilityChange} value={listingAvailability} required/>
                <input label="Description" type='text' onChange={handleDescriptionChange} value={listingDescription} required/>
                <input type='submit'/>
            </form>
        </>
    )
}
