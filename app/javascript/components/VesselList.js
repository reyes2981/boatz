import Vessel from './Vessel'

import React from 'react'

export default function VesselList({vessels}) {
  const vesselList = vessels.map((vessel, idx) => {
    return <Vessel key={idx} vessel={vessel} />
  })

  return (
    <div>
      {vesselList}
    </div>
  )
  
}



