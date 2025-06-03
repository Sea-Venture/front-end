import React from 'react'

const locationCard = ({lat, lang}: {lat: number, lang: number}) => {
  return (
    <>
    <div>locationCard</div>
    <div>
        <p>Latitude: {lat}</p>
        <p>Longitude: {lang}</p>
    </div>
    </>
    
  )
}

export default locationCard