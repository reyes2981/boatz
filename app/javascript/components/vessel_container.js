import React from 'react'

export default function Vessel_container() {
    const boats = fetch("http://localhost:3000/vessels")  
        .then (resp => resp.json())
        .then(vesselObject => listVessel(vesselObject))

    function listVessel(v) {
        v.map( vessel => {
            return(
                <div>
                    {vessel.description}
                    {vessel.price}
                    {vessel.availability}
                </div>
            )
        })
    }
    return (
        <div>
            {boats}
        </div>
    )
}
