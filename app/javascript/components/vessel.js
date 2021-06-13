import React from 'react'

export default function Vessel({name, location, berths}) {
    return (
      <div>
        <div>
            Name: {name} 
        </div>
        <div>
            Location: {location}
        </div>
        <div>
            Berths: {berths} 
        </div>
        <div>
            <a>Delete</a>
        </div>
      </div>
    )
}
