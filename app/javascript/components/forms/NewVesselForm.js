import React, { useState } from 'react'

// extra field called images
export const NewVesselForm = () => {

    const [ vesselName, setVesselName ] = useState('')
    const [ vesselLocation, setVesselLocation ] = useState('')
    const [ vesselBerth, setVesselBerth ] = useState(0)

    const handleNameChange = (event) => {
        setVesselName(event.target.value)
    }

    const handleLocationChange = (event) => {
        setVesselLocation(event.target.value)
    }

    const handleBerthChange = (event) => {
        setVesselBerth(event.target.value)
    }

    // const handleImageChange = (event) => {
    //     onFormChange(event.target.value)
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        // onFormSubmit()
    }

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <input label="Name" type='text' onChange={handleNameChange} value={vesselName} required/>
                <input label="Location" type='text' onChange={handleLocationChange} value={vesselLocation} required/>
                <input label="Berth" type='number' onChange={handleBerthChange} value={vesselBerth} required/>
                {/* <input label="Attach photos:" type='image' onChange={handleImageChange} value={userInput} required/> */}
                <input type='submit'/>
            </form>
        </>
    )
}
