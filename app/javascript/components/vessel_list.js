import React from 'react'
import Vessel from './Vessel'

export default function Vessel_list() {
    // const vessels = boats.map((boat) => {
    //     return <Vessel key={boat.id} boat={boat}/>
    // })

    function addNewVessel() {
        const vesselObj = {
            description: vessel.description,
            price: vessel.price,
            availability: vessel.availability
        }

        fetch(`http://localhost:3000/owners/{owner.id}/vessels`, {
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
            This is where the vessel list goes
            <button onClick={() => addNewVessel()}>New vessel</button>
        </div>
    )
}

