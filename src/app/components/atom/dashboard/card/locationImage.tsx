import React from 'react'

const locationImage = ({imageUrl}: {imageUrl:string}) => {
  return (
    <img src={imageUrl} alt="card-image" />
  )
}

export default locationImage