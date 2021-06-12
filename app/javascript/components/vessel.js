import React from 'react'

export default function vessel(boat) {
    return (
        <div>
            Description: {boat.description}
            Price: {boat.price}
            Availability: {boat.availability}
            <button></button>
        </div>
    )
}
