import React from 'react'
import vessel from './vessel'

export default function Vessel_list() {
    const vessels = boats.map((boat) => {
        return <vessel key={boat.id} boat={boat}/>
    })

    function addNewVessel() {
        const vesselObj = {
            description: vessel.description,
            price: vessel.price,
            availability: vessel.availability
        }

        fetch("http://localhost:3000/vessels", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vesselObj)
        })
        .then (resp => resp.json())
        .then(vesselObject => {
            onAddVessel(vesselObject)
        })
    }

    return (
        <div>
            {vessels}
            <button onClick={() => addNewVessel()}>New vessel</button>
        </div>
    )
}

